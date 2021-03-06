var basePath = process.cwd()
var pluginsPath = basePath + "/dependencies/plugins"
var path = require("path")
var fs = require("fs")

var installedPlugins = {

}
var availablePlugins = require("./Packages")

var plugins = []

module.exports = function (app) {
    return {
        plugins: plugins,
        addPlugin: addPlugin(app),
        getPlugin: function (name) {
            for (var i in plugins) {
                if (plugins[i].name == name) {
                    return plugins[i].link
                }
            }
        },
        getPluginByVersionReference: getPluginByVersionReference,
        installPlugin: function (name, version) {
            var plugin = getPluginByVersionReference(name, version)
            if (fs.existsSync(app.pluginsPath + "/" + name + "-" + plugin.version)) {
                this.addPlugin(name, plugin.version)
                return
            }
            
            if (/http\:\/\//.test(name)) {
                var url = name
            } else {
                var url = plugin.url
            }
            app.log("Installing Plugin: "+name+ " ("+plugin.version+")")
            app.sendMessage("preInstallPlugin", null, name, plugin.version)

            var Download = require('download');

            new Download({
                mode: '755',
                extract: true
            })  .get(url, app.pluginsPath)
                .run(function (err, response) {
                    if (! (name in installedPlugins)) {
                        installedPlugins[name] = []
                    }
                    var version = url.split("/").pop().replace(/\.zip/, "")

                    installedPlugins[name].push(version)

                    var shell = require('shelljs');
                    shell.exec("cd " + app.pluginsPath + "/" + name + "-"+ version + " && npm install && cd -", {silent:true})
                    app.sendMessage("postInstallPlugin", null, name, version)
                    addPlugin(app)(name, version)

                });
        }
    }
}

function getPluginByVersionReference (name, version) {
    return availablePlugins[name][version]
}

function addPlugin (app) {
    return function (name, version, pluginPath) {
        if (! pluginPath) {
            pluginPath = app.pluginsPath + "/" + name + "-" + version
        } else {
            pluginPath = process.cwd() + "/" + pluginPath
        }
        
        if (! version) {
            version = "unknown"
        }

        pluginPath = path.normalize(pluginPath)
        
        var pluginSummary = {
            name: name,
            version: version,
            path: pluginPath,
            link: new require(pluginPath)(app)
        }
        app.log("Added Plugin: " + name + " ( "+pluginPath+" )")
        app.sendMessage("preAddPlugin", undefined, pluginSummary)
        plugins.push(pluginSummary)
        app.sendMessage("postAddPlugin", undefined, pluginSummary)
    }
}

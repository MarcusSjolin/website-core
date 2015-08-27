var basePath = process.cwd()
var pluginsPath = basePath + "/dependencies/plugins"

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
                    console.log(name)
                    return plugins[i].link
                }
            }
        },
        installPlugin: function (name, version) {
            if (/http\:\/\//.test(name)) {
                var url = name
            } else {
                var url = availablePlugins[name][version].url
            }
            app.log("Installing Plugin: "+name+ " ("+availablePlugins[name][version].version+")")
            app.sendMessage("preInstallPlugin", null, name, version)

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
                    addPlugin(app)(name+"-"+version)

                });
        }
    }
}

function addPlugin (app) {
    return function (name, path) {
        if (! path) {
            path = app.pluginsPath + "/" + name
        } else {
            path = process.cwd() + "/" + path
        }

        var pluginSummary = {
            name: name,
            path: path,
            link: new require(path)(app)
        }
        app.log("Added Plugin: " + name + " ( "+path+" )")
        app.sendMessage("preAddPlugin", undefined, pluginSummary)
        plugins.push(pluginSummary)
        app.sendMessage("postAddPlugin", undefined, pluginSummary)
    }
}

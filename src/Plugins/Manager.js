var basePath = process.cwd()
var pluginsPath = basePath + "/dependencies/plugins"

var installedPlugins = {

}
var availablePlugins = require("./Packages")

var plugins = []

exports = module.exports = function (app) {
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
                    shell.exec("cd " + pluginsPath + "/" + name + "-"+ version + " && npm install && cd -", {silent:true})
                    addPlugin(app)(name+"-"+version)
                });
        },
        removePlugin: function (name) {

        },
        updatePlugin: function (name) {

        },
        enablePlugin: function (name) {

        },
        disablePlugin: function (name) {

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
            link: new require(path)(app)
        }
        app.log("Added Plugin: " + name)
        app.sendMessage("preAddPlugin", undefined, pluginSummary)
        plugins.push(pluginSummary)
        app.sendMessage("postAddPlugin", undefined, pluginSummary)
    }
}

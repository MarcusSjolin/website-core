var basePath = process.cwd()
var pluginsPath = basePath + "/dependencies/plugins"

var installedPlugins = {

}
var availablePlugins = {
    "website-plugin-admin": {
        "latest": "https://github.com/MarcusSjolin/website-plugin-admin/archive/0.0.3.zip",
        "0.0.3": "https://github.com/MarcusSjolin/website-plugin-admin/archive/0.0.3.zip",
        "0.0.2": "https://github.com/MarcusSjolin/website-plugin-admin/archive/0.0.2.zip",
        "0.0.1": "https://github.com/MarcusSjolin/website-plugin-admin/archive/0.0.1.zip"
    },
    "website-plugin-webpack": {
        "latest": "https://github.com/MarcusSjolin/website-plugin-webpack/archive/0.0.2.zip",
        "0.0.2": "https://github.com/MarcusSjolin/website-plugin-webpack/archive/0.0.2.zip",
        "0.0.1": "https://github.com/MarcusSjolin/website-plugin-webpack/archive/0.0.1.zip"
    }
}

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
                var url = availablePlugins[name][version]
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
    return function (name) {
        var pluginSummary = {
            name: name,
            link: new require(app.pluginsPath + "/" + name)(app)
        }
        app.log("Added Plugin: " + name)
        app.sendMessage("preAddPlugin", undefined, pluginSummary)
        plugins.push(pluginSummary)
        app.sendMessage("postAddPlugin", undefined, pluginSummary)
    }
}

var homePath = process.cwd()
var availablePlugins = require("../Plugins/Packages")
var fs = require("fs")

exports = module.exports = function (app) {
    var PluginsManager = require ("../Plugins/Manager")(app)

    app.plugins = PluginsManager.plugins
    app.getPlugin = PluginsManager.getPlugin
    app.addPlugin = PluginsManager.addPlugin
    app.installPlugin = PluginsManager.installPlugin

    var package = require(homePath + "/package.json")

    if (package.plugins) {
        for (var pluginName in package.plugins) {
            if (package.plugins[pluginName][0] == ".") {
                app.addPlugin(pluginName, package.plugins[pluginName])
            } else if (fs.lstatSync(arr.pluginsPath + "/" + pluginName + "-" + pluginVersion).isDirectory()) {
                var pluginVersion = availablePlugins[pluginName][package.plugins[pluginName]].version
                app.addPlugin(pluginName + "-" + pluginVersion)
            } else {
                app.installPlugin(pluginName, package.plugins[pluginName])
            }
        }
    }
}

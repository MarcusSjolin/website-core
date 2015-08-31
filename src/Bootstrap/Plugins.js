var homePath = process.cwd()
var availablePlugins = require("../Plugins/Packages")
var fs = require("fs")

exports = module.exports = function (app) {
    var PluginsManager = require ("../Plugins/Manager")(app)
    if (! fs.existsSync(homePath + "/dependencies")) {
        fs.mkdirSync(homePath + "/dependencies")
    }
    if (! fs.existsSync(homePath + "/dependencies/plugins")) {
        fs.mkdirSync(homePath + "/dependencies/plugins")
    }

    app.plugins = PluginsManager.plugins
    app.getPlugin = PluginsManager.getPlugin
    app.addPlugin = PluginsManager.addPlugin
    app.installPlugin = PluginsManager.installPlugin

    var package = require(homePath + "/package.json")

    if (package.plugins) {
        for (var pluginName in package.plugins) {
            if (package.plugins[pluginName][0] == ".") {
                app.addPlugin(pluginName, 'local', package.plugins[pluginName])
            } else {
                var pluginVersion = availablePlugins[pluginName][package.plugins[pluginName]].version
                app.installPlugin(pluginName, pluginVersion)
                
            }
        }
    }
}

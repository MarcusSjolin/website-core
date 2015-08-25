var homePath = process.cwd()

exports = module.exports = function (app) {
    var PluginsManager = require ("../Plugins/Manager")(app)

    app.plugins = PluginsManager.plugins
    app.getPlugin = PluginsManager.getPlugin
    app.installPlugin = PluginsManager.installPlugin

    var package = require(homePath + "/package.json")

    if (package.plugins) {
        for (var i in package.plugins) {
            app.installPlugin(i, package.plugins[i])
        }
    }
}

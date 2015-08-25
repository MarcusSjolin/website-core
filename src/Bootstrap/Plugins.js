var homePath = process.cwd()

exports = module.exports = function (app) {
    var PluginsManager = require ("../Plugins/Manager")(app)

    app.plugins = PluginsManager.plugins
    app.addPlugin = PluginsManager.addPlugin
    app.getPlugin = PluginsManager.getPlugin

    var package = require(homePath + "/package.json")

    if (package.plugins) {
        for (var i in package.plugins) {
            app.addPlugin(i)
        }
    }
}

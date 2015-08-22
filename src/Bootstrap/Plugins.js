exports = module.exports = function (app) {
    var PluginsManager = require ("../Plugins/Manager")(app)

    app.plugins = PluginsManager.plugins
    app.addPlugin = PluginsManager.addPlugin
    app.getPlugin = PluginsManager.getPlugin
}

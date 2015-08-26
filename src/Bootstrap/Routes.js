var Router = require("node-router").Router
var VersionController = require("../Controllers/Version.Controller")
var ErrorController = require("../Controllers/Error.Controller")
var Assets = require("../Services/Assets")
var PluginsController = require("../Controllers/Plugins.Controller.js")

exports = module.exports = function (app) {
    app.router = new Router()


    app.sendMessage("preUpdateRoutes")
    app.router.add("Version", "/api/version", VersionController(app).get)
    app.router.add("NotFound", "/404", ErrorController(app).NotFound)
    app.router.add("Error", "/500", ErrorController(app).Application)
    app.router.add("Assets", "/assets/:id", Assets(app).get)
    app.router.add("AllPlugins", "/api/plugins", PluginsController(app).All)
    app.router.add("ActivatePlugin", "/api/plugins/activate/:id", PluginsController(app).Activate)
    app.router.add("DeactivatePlugin", "/api/plugins/deactivate/:id", PluginsController(app).Deactivate)
    app.sendMessage("updateRoutes")
    app.sendMessage("postUpdateRoutes")
}

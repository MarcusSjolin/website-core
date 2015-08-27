var VersionController = require("../Controllers/Version.Controller")
var ErrorController = require("../Controllers/Error.Controller")
var Assets = require("../Services/Assets")
var PluginsController = require("../Controllers/Plugins.Controller.js")

exports = module.exports = function (app) {
    app.sendMessage("preUpdateRoutes")
    app.get("/api/version", VersionController.get)
    app.get("/404", ErrorController.NotFound)
    app.get("/500", ErrorController.Application)
    app.get("/api/plugins", PluginsController.All)
    app.get("/api/plugins/activate/:id", PluginsController.Activate)
    app.get("/api/plugins/deactivate/:id", PluginsController.Deactivate)
    app.sendMessage("updateRoutes")
    app.sendMessage("postUpdateRoutes")
}

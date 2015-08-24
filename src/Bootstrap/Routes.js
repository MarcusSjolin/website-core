var Router = require("node-router").Router
var Version = require("../Controllers/Version.Controller")
var Error = require("../Controllers/Error.Controller")

exports = module.exports = function (app) {
    app.router = new Router()

    app.sendMessage("preUpdateRoutes")
    app.router.add("Version", "/version", Version.get)
    app.router.add("NotFound", "/404", Error.NotFound)
    app.router.add("Error", "/500", Error.Application)
    app.sendMessage("updateRoutes")
    app.sendMessage("postUpdateRoutes")
}

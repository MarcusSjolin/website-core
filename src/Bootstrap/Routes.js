var Router = require("node-router").Router
var Version = require("../Controllers/Version.Controller")

exports = module.exports = function (app) {
    app.router = new Router()

    app.sendMessage("preUpdateRoutes")
    app.router.add("Version", "/version", Version.get)
    app.sendMessage("updateRoutes")
    app.sendMessage("postUpdateRoutes")
}

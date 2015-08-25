var Router = require("node-router").Router
var Version = require("../Controllers/Version.Controller")
var Error = require("../Controllers/Error.Controller")
var Assets = require("../Services/Assets")

exports = module.exports = function (app) {
    app.router = new Router()


    app.sendMessage("preUpdateRoutes")
    app.router.add("Version", "/version", Version(app).get)
    app.router.add("NotFound", "/404", Error(app).NotFound)
    app.router.add("Error", "/500", Error(app).Application)
    app.router.add("Assets", "/assets/:id", Assets(app).get)
    app.sendMessage("updateRoutes")
    app.sendMessage("postUpdateRoutes")
}

var Router = require("node-router").Router
var Version = require("../Controllers/Version.Controller")

exports = module.exports = function (app) {
    app.router = new Router()

    app.sendMessage("preUpdateRoutes")

    app.router.add("Version", "/version", Version)
    app.sendMessage("updateRoutes")

    app.registerListener("postAddPlugin", function (app, err, message) {
        for (var key in message.link.listeners) {
            app.registerListener(key, message.link.listeners[key])
        }
    })


}

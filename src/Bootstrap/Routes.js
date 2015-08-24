var Router = require("node-router").Router

exports = module.exports = function (app) {
    app.router = new Router()

    console.log(app.router)

    app.registerListener("postAddPlugin", function (app, err, message) {
        for (var key in message.link.listeners) {
            app.registerListener(key, message.link.listeners[key])
        }
    })
}

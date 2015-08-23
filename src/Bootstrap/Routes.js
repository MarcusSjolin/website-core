exports = module.exports = function (app) {
    var Routes = require("../Router/Router")(app)
    app.routes = Routes

    app.registerListener("postAddPlugin", function (app, err, message) {
        for (var key in message.link.listeners) {
            app.registerListener(key, message.link.listeners[key])
        }
    })
}

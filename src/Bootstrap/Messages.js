exports = module.exports = function (app) {
    var Messages = require ("../Services/Messages")(app)

    app.sendMessage = Messages.sendMessage
    app.registerListener = Messages.registerListener
}

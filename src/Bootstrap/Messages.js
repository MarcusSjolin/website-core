exports = module.exports = function (app) {
    var Messages = require ("../Services/Messages")(app)

    app.sendMessage = Messages.sendMessage
    app.sendQuery = Messages.sendQuery
    app.registerListener = Messages.registerListener
    app.registerQueryListener = Messages.registerQueryListener
}

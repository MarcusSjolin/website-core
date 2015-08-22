exports = module.exports = function (app) {
    var Log = require ("../Logger/Log")(app)

    app.log = Log.log
}

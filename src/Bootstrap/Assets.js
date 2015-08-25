exports = module.exports = function (app) {
    var Assets = require ("../Services/Assets")(app)

    app.assets = {
        add: Assets.add,
        get: Assets.get
    }
}

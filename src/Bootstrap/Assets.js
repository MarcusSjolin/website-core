var Assets = require ("../Services/Assets")

exports = module.exports = function (app) {
    app.assets = {
        add: Assets(app).add,
        get: Assets(app).get
    }
}

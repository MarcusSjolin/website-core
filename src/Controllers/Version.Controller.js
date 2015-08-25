exports = module.exports = function (app) {
    return {
        get: function(req, res) {
            res.send(app.package.name + " ("+ app.package.version + ")")
        }
    }
}

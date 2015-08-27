module.exports = {
    get: function(req, res) {
        res.send(app.package.name + " ("+ app.package.version + ")")
    }
}

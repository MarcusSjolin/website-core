exports = module.exports = function (app) {
    return {
        All: function(req, res) {
            res.json({completed: true, errors: null, data: require("../Plugins/Packages")})
        },
        Installed: function(req, res) {
            res.json({completed: true, errors: null, data: require("../Plugins/Packages")})
        },
        Activated: function(req, res) {
            res.json({completed: true, errors: null, data: require("../Plugins/Packages")})
        },
        Activate: function(req, res) {
            var name = req.params.name || "Name not found"
            app.log("Activating Plugin: " + req.params.name)
            res.json({completed: true, errors: null, data:{name: name}})
        },
        Deactivate: function(req, res) {
            var name = req.params.name || "Name not found"
            app.log("Deactivating Plugin: " + name)
            res.json({completed: true, errors: null, data:{name: name}})
        }
    }
}

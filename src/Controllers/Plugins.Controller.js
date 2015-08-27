var fs = require("fs")

module.exports = function (app) {
    return {
        All: function(req, res) {
            fs.readdir(app.pluginsPath, function(err, installed) {
                res.json({
                    available: require("../Plugins/Packages"),
                    installed: installed,
                    activated: app.plugins
                })
            })
            
        },
        Installed: function(req, res) {
            console.log(app.pluginsPath)
            
            
        },
        Activated: function(req, res) {
            res.json(app.plugins)
        },
        Install: function(req, res) {
            app.log("Installing Plugin: " + req.query.plugin + " ("+req.query.version+")")
            res.json({
                plugin: req.query.plugin,
                version: req.query.version
            })
        },
        Activate: function(req, res) {
            app.log("Activating Plugin: " + req.query.plugin + " ("+req.query.version+")")
            res.json({
                plugin: req.query.plugin,
                version: req.query.version
            })
        },
        Deactivate: function(req, res) {
            app.log("Deactivating Plugin: " + req.query.plugin + " ("+req.query.version+")")
            res.json({
                plugin: req.query.plugin,
                version: req.query.version
            })
        }
    }
}

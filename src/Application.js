var http = require('http')

var basePath = process.cwd()

var config = require(basePath + "/default.config")
var package = require(basePath + "/package.json")
var Express = require('express')

exports = module.exports = function () {
    var app = Express();
    app.project = {
        name: "website-core"
    }

    app.config = config
    app.env = process.env.NODE_ENV || 'development'
    app.package = package
    app.tmpPath = basePath + "/.tmp"
    app.pluginsPath = basePath + "/dependencies/plugins"

    require ("./Bootstrap")(app)

    return app
}

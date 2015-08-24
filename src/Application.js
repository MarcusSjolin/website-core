var http = require('http')

var basePath = process.cwd()

var config = require(basePath + "/default.config")
var HttpInit = require("./Http/Init")

exports = module.exports = function () {
    var app = {
        app: "website-core",
        config: config,
        env: process.env.NODE_ENV || 'development'
    }

    require ("./Bootstrap")(app)

    app.log("info", "Available Routes", app.router.getAll())
    
    return HttpInit(app)
}

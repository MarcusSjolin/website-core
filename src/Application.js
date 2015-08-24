var http = require('http')

var basePath = process.cwd()

var config = require(basePath + "/default.config")

exports = module.exports = function () {
    var app = {
        app: "website-core",
        config: config,
        env: process.env.NODE_ENV || 'development'
    }

    require ("./Bootstrap")(app)

    return function(req, res) {
        console.log(app)
        console.log(app.router.getAll())

        if (app.router.find(req.url)) {
            res.end("Found!!")
        } else {
            res.end("woot")
        }
    }
}

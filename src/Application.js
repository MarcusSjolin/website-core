var basePath = process.cwd()

var config = require(basePath + "/default.config")

var app = {
    app: "website-core",
    config: config,
    env: process.env.NODE_ENV || 'development'
}

require ("./Bootstrap")(app)

exports = module.exports = app

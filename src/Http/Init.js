var Response = require("./Response")
var Router = require("../Router/Router")


exports = module.exports = function (app) {
    return function(req, res) {
        Response(res)
        Router(app)(req, res)
    }
}

exports = module.exports = function (app) {
    return function(req, res) {
        var route = app.router.find(req.url)
        if (route) {
            app.log("info", "Routing to Name: " + route.name + ", Route: "+ route.route + ", Query: " + route.query)
            route.callback(req, res)
        } else {
            var route = app.router.find('/404')
            if (route) {
                app.log("info", "Routing to Name: " + route.name + ", Route: "+ route.route + ", Query: " + route.query)
                route.callback(req, res)
            }
        }
    }
}
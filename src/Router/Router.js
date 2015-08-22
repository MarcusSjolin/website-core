var routes = {
    get: [],
    post: [],
    put: []
}
exports = module.exports = function (app) {
    return {
        routes: routes,
        getRoute: getRoute,
        addRoute: function (type, name, route, options, callback) {
            if (! getRoute(route)) {

                if (callback == undefined) {
                    callback = options
                    options = {}
                }

                routes[type].push({
                    name: name,
                    route: route,
                    options: options,
                    callback: callback
                })
            }
        }
    };
}

function getRoute (route, type) {
    var type = type || 'get'
    for (var i in routes[type]) {
        return this.routes[type][i]
    }

    return undefined
}

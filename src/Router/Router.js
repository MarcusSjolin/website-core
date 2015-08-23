exports = module.exports = function (app) {
    return {
        get: function (route, callback) {
            app.express.get(route, callback)
        },
        post: function (route, callback) {
            app.express.post(route, callback)
        },
        put: function (route, callback) {
            app.express.put(route, callback)
        },
        all: function (route, callback) {
            app.express.all(route, callback)
        },
    };
}

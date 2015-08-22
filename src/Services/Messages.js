var listeners = {}
var queryListeners = {}

exports = module.exports = function (app) {
    return {
        registerListener: function (key, callback) {
            if (! listeners[key]) {
                listeners[key] = []
            }

            listeners[key].push(callback)
        },
        sendMessage: function(key, err, message) {
            if (! listeners[key]) {
                return
            }
            for (var i in listeners[key]) {
                listeners[key][i](app, err, message)
            }
        },


        registerQueryListener: function (key, callback) {
            if (! queryListeners[key]) {
                queryListeners[key] = []
            }

            queryListeners[key].push(callback)
        },
        query: function(key, message, callback) {
            if (! queryListeners[key]) {
                return
            }
            for (var i in queryListeners[key]) {
                queryListeners[key][i](app, err, message)
            }
        }
    }
}

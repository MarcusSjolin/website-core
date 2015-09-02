var moment = require("moment")

exports = module.exports = function (app) {
    return {
        log: function(severity) {
            var args = []
            for (var i in arguments) {
                args.push(
                    Object.prototype.toString.call( arguments[i] ) === '[object Object]' 
                    || Object.prototype.toString.call( arguments[i] ) === '[object Array]' 
                        ? JSON.stringify(arguments[i]) 
                        : arguments[i]
                )
            }
            console.log(args)
            if (["info", "warn", "error", "debug"].indexOf(severity) == -1) {
                severity = "info"
            } else {
                args.shift()
            }
            var message = "[" + moment().format("YYYY-MM-DD HH:mm:ss") + "]"

            message += "[" + severity + "]"
            for (var i in args) {
                message += "["+args[i]+"]"
            }

            console.log(message)
            if (app.isDev()) {
                app.devMessage(message)
            }
        }
    }
}
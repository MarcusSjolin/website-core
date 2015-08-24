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
            
            if (! ["info", "warn", "error", "debug"].indexOf(severity)) {
                severity = "info"
            } else {
                args.shift()
            }
            args.shift()
            
            args.unshift("["+getDate()+"]["+severity+"]")
            
            console.log.apply(this, args)
        }
    }
}

function getDate() {
    return moment().format("YYYY-MM-DD HH:mm:ss")
}

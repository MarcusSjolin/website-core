var moment = require("moment")

exports = module.exports = function (app) {
    return {
        log: function(severity, message) {
            if (! message) {
                message = severity
                severity = "INFO"
            }
            console.log("["+severity+"]["+getDate()+"] " + JSON.stringify(message))
        }
    }
}

function getDate() {
    return moment().format("YYYY-MM-DD HH:mm:ss")
}

var fs = require("fs")

exports = module.exports = function(res) {
    res.json = json(res)
    res.send = send(res)
    res.sendFile = sendFile(res)
}

function json (res) {
    return function (obj) {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(obj))
    }
}
function send (res) {
    return function (obj) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(obj)
    }
}
function sendFile (res) {
    return function (file, parameters) {
        console.log(parameters)
        fs.exists(file, function(exists) {
            if (exists) {
                fs.readFile(file, function(err, data) {
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end(data)
                })
            }
        })
    }
}

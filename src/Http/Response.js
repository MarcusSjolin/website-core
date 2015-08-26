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
    return function (code, obj) {
        if (obj === undefined) {
            obj = code
            code = 200
        }
        res.writeHead(code, {"Content-Type": "text/html"});
        res.end(obj)
    }
}
function sendFile (res) {
    return function (file, parameters) {
        var stat = fs.statSync(file);

        res.writeHead(200, {
            //'Content-Type': 'audio/mpeg',
            'Content-Length': stat.size
        });

        var readStream = fs.createReadStream(file);
        // We replaced all the event handlers with a simple call to readStream.pipe()
        readStream.pipe(res);
    }
}

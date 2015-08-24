exports = module.exports = function(res) {
    res.json = json(res)
    res.send = send(res)
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
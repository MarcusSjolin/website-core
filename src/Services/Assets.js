var assets = {}

exports = module.exports = function(app) {
    return {
        get: get(app),
        add: add(app)
    }
}

function add (app) {
    return function (path) {
        var assetsReference = "123123"

        var assetsEntry = {
            reference: assetsReference,
            path: path
        }

        assets[assetsReference] = assetsEntry

        return assetsEntry
    }
}

function get (app) {
    return function (req, res) {
        console.log(req.route)
        app.sendMessage("preGetAsset", null, req)
        app.sendMessage("getAsset", null, req)
        app.sendMessage("postGetAsset", null, req)

        var route = req.route.query
        console.log(route)
        route = route.replace(/\/assets\/[^\/]*/, "")


        var assetPath = assets[req.params.id].path + "/" + route

        console.log(assetPath)

        res.sendFile (assetPath)
    }
}

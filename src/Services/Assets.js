exports = module.exports = function(app) {
    app.assetsAvailable = {}
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

        app.assetsAvailable[assetsReference] = assetsEntry

        return assetsEntry
    }
}

function get (app) {
    return function (req, res) {
        app.sendMessage("preGetAsset", null, req, res)
        app.sendMessage("getAsset", null, req, res)
        app.sendMessage("postGetAsset", null, req, res)
    }
}

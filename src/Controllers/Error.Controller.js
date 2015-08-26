exports = module.exports = function (app) {
    return {
        NotFound: function(req, res) {
            res.send(404, "404 Not Found")
        },
        General: function(req, res) {
            res.send(500, "500 General Error")
        }
    }
}

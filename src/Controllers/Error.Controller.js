exports = module.exports = {
    NotFound: function(req, res) {
        res.end("404 Not Found")
    },
    General: function(req, res) {
        res.end("500 General Error")
    }
}

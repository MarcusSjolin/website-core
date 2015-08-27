module.exports = {
    NotFound: function(req, res) {
        res.send(404, "404 Not Found")
    },
    Application: function(req, res) {
        res.send(500, "500 General Error")
    }
}

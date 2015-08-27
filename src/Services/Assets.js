var express = require("express")

module.exports = function(app) {
    return {
        add: add(app)
    }
}

function add (app) {
    return function (route, path) {
        app.use(route, express.static(path));
    }
}

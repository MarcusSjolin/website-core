exports = module.exports = function(app, request, response) {
    require("./Logger")(app)
    require("./Messages")(app)
    require("./Assets")(app)
    require("./Routes")(app)
    require("./Plugins")(app)
}

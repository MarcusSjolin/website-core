exports = module.exports = function(app, request, response) {
    require("./Logger")(app)
    require("./BrowserSync")(app)
    require("./Messages")(app)
    require("./Assets")(app)
    require("./Routes")(app)
    require("./Plugins")(app)
}

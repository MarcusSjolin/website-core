exports = module.exports = function(app, request, response) {
    require("./Logger")(app)
    require("./Messages")(app)
    require("./Translations")(app)
    require("./Assets")(app)
    require("./Routes")(app)
    require("./Plugins")(app)
}

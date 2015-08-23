exports = module.exports = function(app) {
    require("./Express")(app)
    require("./Logger")(app)
    require("./Messages")(app)
    require("./Routes")(app)
    require("./Plugins")(app)
}

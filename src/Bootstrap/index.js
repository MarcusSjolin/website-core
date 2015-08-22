exports = module.exports = function(app) {
    require("./Logger")(app)
    require("./Messages")(app)
    require("./Routes")(app)
    require("./Plugins")(app)
}

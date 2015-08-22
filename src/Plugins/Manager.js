var basePath = process.cwd()
var pluginsPath = basePath + "/dependencies/plugins"

var plugins = []

exports = module.exports = function (app) {
    return {
        plugins: plugins,
        addPlugin: function (name) {
            var pluginSummary = {
                name: name,
                link: require(pluginsPath + "/" + name)
            }
            console.log("[website-core Plugins/Manager] Added Plugin: " + name)
            app.sendMessage("preAddPlugin", undefined, pluginSummary)
            plugins.push(pluginSummary)
            app.sendMessage("postAddPlugin", undefined, pluginSummary)
        },
        getPlugin: function (name) {
            for (var i in plugins) {
                if (plugins[i].name == name) {
                    return plugins[i].link
                }
            }
        },
    }
}

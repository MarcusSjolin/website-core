var bs

module.exports = function(app) {
    if (app.isDev()) {
        // Create a Browsersync instance
        bs = require("browser-sync").create();

        // Now init the Browsersync server
        bs.init({
            proxy: "localhost:8080"
        });
        
        app.devReload = function () {
            bs.reload()
        }
        
        app.devMessage = function (value) {
            bs.notify(value)
        }
        
        app.devWatch = function (filesPath, files) {
            if (! files) {
                files = "*"
            }
            bs.watch(filesPath + "/" + files).on("change", bs.reload);
        }
    }
}
var app = require("./src/Application")

app.addPlugin("website-plugin-admin")

app.sendMessage("preUpdateRoutes")
app.sendMessage("updateRoutes")
app.sendMessage("postUpdateRoutes")

app.log(app)


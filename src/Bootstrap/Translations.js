module.exports = function(app) {
    var translations = {}

    app.translate = function(keyword) {
        return translations[app.locale][keyword] || keyword
    }

    app.addTranslations = function(locale, data) {
        if (! translations[locale]) {
            translations[locale] = data
            return
        }

        for (var i in data) {
            translations[language][i] = data[i]
        }
    }

    app.getTranslations = function() {
        return translations
    }

    app.get('/api/translations', function(req, res) {
        res.json(translations)
    })

    app.get('/api/translations/:locale', function(req, res) {
        res.json(translations[req.query.locale])
    })

    app.on("addLocaleTranslations", function(data) {
        app.log(data)
    })
}

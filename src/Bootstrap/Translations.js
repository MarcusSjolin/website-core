module.exports = function(app) {
    var translations = {}

    app.translate = function(namespace, keyword) {
        return translations[namespace][app.locale][keyword] || keyword
    }

    app.addTranslations = function(namespace, locale, data) {
        if (! translations[namespace]) {
            translations[namespace] = {}
            return
        }
        if (! translations[namespace][locale]) {
            translations[namespace][locale] = data
            return
        }

        for (var i in data) {
            translations[namespace][locale][i] = data[i]
        }
    }

    app.getTranslations = function() {
        return translations
    }

    app.get('/api/translations/:namespace', function(req, res) {
        res.json(translations[req.params.namespace])
    })

    app.get('/api/translations/:namespace/:locale', function(req, res) {
        res.json(translations[req.params.namespace][req.params.locale])
    })
}

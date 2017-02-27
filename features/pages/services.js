var Page = require('astrolabe').Page;

module.exports = Page.create({

    url: { value: 'http://localhost:8888/service.html' },

    header: {
        get: function() {
            return element(by.css('.span12 .page-header'));
        }
    }
});
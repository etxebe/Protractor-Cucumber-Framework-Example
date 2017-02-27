var Page = require('astrolabe').Page;

module.exports = Page.create({

    url: { value: 'http://localhost:8888/about.html' },

    //LOCATORS
    header: {
        get: function() {
            return element(by.css('.page-header'));
        }
    }
});
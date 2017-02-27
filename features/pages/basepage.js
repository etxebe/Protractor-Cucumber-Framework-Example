var Page = require('astrolabe').Page;

module.exports = Page.create({

    clearAndType: {
        value: function(elem, text) {
            elem.clear();
            elem.sendKeys(text);
        }
    }
});
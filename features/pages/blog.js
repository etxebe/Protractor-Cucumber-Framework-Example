var Page = require('astrolabe').Page;

module.exports = Page.create({

    url: { value: 'http://localhost:8888/blog.html' },

    //LOCATORS
    header: {
        get: function() {
            return element(by.css('.span12 .page-header h1'));
        }
    },

    readMore: {
        get: function() {
            return element.all(by.css('.blog-post .btn'));
        }
    },

    name: {
        get: function() {
            return browser.findElement(by.xpath('/html/body/div[2]/div[2]/div[1]/div[2]/form/input[1]'));
        }
    },

    email: {
        get: function() {
            return browser.findElement(by.xpath('/html/body/div[2]/div[2]/div[1]/div[2]/form/input[2]'));
        }
    },

    message: {
        get: function() {
            return browser.findElement(by.xpath('/html/body/div[2]/div[2]/div[1]/div[2]/form/textarea'));
        }
    },

//    submitComment: {
//        get: function() {
//            return browser.findElement(by.xpath('/html/body/div[2]/div[2]/div[1]/div[2]/form/button'));
//        }
//    },

    //METHODS
    getTitle: {
        get: function() {
            return browser.getTitle();
        }
    },

    clickReadMoreAtIdx: {
        value: function(idx) {
            this.readMore.get(idx).click();
        }
    },

    clickSubmitComment: {
        get: function() {
            browser.findElement(by.xpath('/html/body/div[2]/div[2]/div[1]/div[2]/form/button')).click();
        }
    },

    sendMessage: {
        value: function(user_name, user_mail, user_message) {
            var Page = this;

            Page.name.sendKeys(user_name);
            Page.email.sendKeys(user_mail);
            Page.message.sendKeys(user_message);

            Page.clickSubmitComment;
        }
    }
});

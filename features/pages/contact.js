var Page = require('astrolabe').Page;
var basePage = require('./basepage');

module.exports = Page.create({

    url: { value: 'http://localhost:8888/contact.html'},

    //LOCATORS

    // Get in Touch Section
    contactHeader: {
        get: function() {
            return element(by.css('.page-header h1'));
        }
    },

    name: {
        get: function() {
            return element(by.id('name'));
        }
    },

    email: {
        get: function() {
            return element(by.id('email'));
        }
    },

    message: {
        get: function() {
            return element(by.id('content'));
        }
    },

    submit: {
        get: function() {
            return element(by.css('fieldset .btn'));
        }
    },

    messageSent: {
        get: function() {
            return element.all(by.css('.row .span6 h3')).get(0);
        }
    },

    map: {
        get: function() {
            return browser.findElement(by.xpath('//*[@id="map-canvas"]/div/div/div[1]/div[3]'))
        }
    },

    //METHODS
    getContactPageTitle: {
        get: function() {
            return browser.getTitle();
        }
    },

    sendMessage: {
        value: function(user_name, user_mail, user_message) {
            var Page = this;

//            Page.name.sendKeys(name);
//            Page.email.sendKeys(email);
//            Page.message.sendKeys(message);

            basePage.clearAndType(Page.name, user_name);
            basePage.clearAndType(Page.email, user_mail);
            basePage.clearAndType(Page.message, user_message);

            Page.submit.click();
        }
    },

    clickZoomIn: {
        get: function() {
            browser.findElement(by.xpath('//*[@id="map-canvas"]/div/div/div[9]/div[1]/div/div[1]')).click();
        }
    },

    clickZoomOut: {
        get: function() {
            browser.findElement(by.xpath('//*[@id="map-canvas"]/div/div/div[9]/div[1]/div/div[3]')).click();
        }
    }
});

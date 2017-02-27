var Page = require('astrolabe').Page;

module.exports = Page.create({

    url: { value: 'http://localhost:8888/index.html' },

    //LOCATORS
    /**
    *
    *@return:
    */
    exampleHeadline: {
        get: function() {
            return browser.findElement(by.xpath('//*[@id="myCarousel"]/div/div[1]/div/div/div[1]/div/h1'));
        }
    },

    exampleText: {
        get: function() {
            return element(by.css('.carousel-caption .lead'));
        }
    },

    featureSection: {
        get: function() {
            return element.all(by.css('div.row'));
        }
    },

    featureHeaders: {
        get: function() {
            return this.featureSection.all(by.css('div.span4'));
        }
    },


    //METHODS
    getHomePageTitle: {
        get: function() {
            return browser.getTitle();
        }
    },

    getFeatureHeaderTextAtIdx: {
        value: function(idx) {
            return this.featureHeaders.get(idx).element(by.css('h2')).getText();
        }
    },

    getFeatureHeaderAttribute: {
        value: function(idx, locator, attr) {
            return this.featureHeaders.get(idx).element(by.css(locator)).getAttribute(attr);
        }
    }

});

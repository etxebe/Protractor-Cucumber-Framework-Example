var Page = require('astrolabe').Page;

module.exports = Page.create( {

    //LOCATORS
    mainMenuObject: {
        get: function() {
            return element.all(by.css('ul.nav > li > a'));
        }
    },

    menuAbout: {
        get: function() {
            return element.all(by.css('li.dropdown ul.dropdown-menu li'));
        }
    },

    //METHODS
    getMainMenuOptionAtIdx: {
        value: function(idx) {
            return this.mainMenuObject.get(idx);
        }
    },

    getMainMenuOptionName: {
        value: function(idx) {
            return this.getMainMenuOptionAtIdx(idx).getText();
        }
    },

    clickMainMenuOption: {
        value: function(idx) {
            return this.getMainMenuOptionAtIdx(idx).click();
        }
    },

    clickAboutMenuOption: {
        value: function(idx) {
            return this.menuAbout.get(idx).click();
        }
    },
});
var Q = require('q');

var homePage = require('../pages/home');
var mainMenu = require('../pages/mainmenu');
var contactPage = require('../pages/contact');
var blogPage = require('../pages/blog');
var servicesPage = require('../pages/services');
var aboutPage = require('../pages/about');
var EC = protractor.ExpectedConditions;


module.exports = function() {

    this.World = require('../support/world').World;

    this.Given(/^I go to Protractor Workshop site$/, function() {
        homePage.go();
    });

    this.Then(/^I should see the correct url address$/, function(callback) {
        this.expect(browser.getCurrentUrl()).to.eventually.equal('http://localhost:8888/index.html').and.notify(callback);
    });

    this.Then(/^I should see the correct title$/, function(callback) {
        this.expect(homePage.getHomePageTitle).to.eventually.equal('Protractor workshop | Home').and.notify(callback);
    });

    this.Given(/^I am on the homepage$/, function() {
        homePage.go();
    });

    this.Then(/^I should see the correct headline$/, function(callback) {
//        this.expect(homePage.exampleHeadline.getText()).to.eventually.equal('aExample Headline 1').and.notify(callback);
//        this.expect(homePage.exampleText.getText()).to.eventually.equal('aCras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.').and.notify(callback);
        var assertions = Q.all([
            homePage.exampleHeadline.getText(),
            homePage.exampleText.getText()
        ]);
//        this.expect(assertions).to.eventually.equal(['Example Headline 1', 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.']).and.notify(callback);
        this.expect(assertions).to.eventually.deep.equal(['Example Headline 1', 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.']).and.notify(callback);
    });

    this.Then(/^I should see five main menu items$/, function(callback) {
        var assertions2 = Q.all([
            mainMenu.mainMenuObject.count(),
            mainMenu.getMainMenuOptionName(0),
            mainMenu.getMainMenuOptionName(1),
            mainMenu.getMainMenuOptionName(2),
            mainMenu.getMainMenuOptionName(3),
            mainMenu.getMainMenuOptionName(4)
        ]);
        this.expect(assertions2).to.eventually.deep.equal([5, 'Home', 'About', 'Services', 'Blog', 'Contact']).and.notify(callback);
    });

    this.Then(/^Menu options should have correct links$/, function(callback) {
        var assertions = Q.all([
            mainMenu.getMainMenuOptionAtIdx(0).getAttribute('href'),
            mainMenu.getMainMenuOptionAtIdx(1).getAttribute('href'),
            mainMenu.getMainMenuOptionAtIdx(2).getAttribute('href'),
            mainMenu.getMainMenuOptionAtIdx(3).getAttribute('href'),
            mainMenu.getMainMenuOptionAtIdx(4).getAttribute('href')
        ]);
        this.expect(assertions).to.eventually.deep.equal([homePage.url, aboutPage.url, servicesPage.url, blogPage.url, contactPage.url]).and.notify(callback);
    });

    this.Then(/^About menu should have three options$/, function(callback) {
        this.expect(mainMenu.menuAbout.count()).to.eventually.equal(3).and.notify(callback);
    });

    this.When(/^I click company menu$/, function() {
        mainMenu.clickMainMenuOption(1);
        mainMenu.clickAboutMenuOption(0);
    });

    this.Then(/^I should see appropriate header 'About us'$/, function(callback) {
        var condition = EC.textToBePresentInElement(aboutPage.header, 'About us');
        browser.wait(condition, 5000);
        this.expect(aboutPage.header.getText()).to.eventually.equal('About us').and.notify(callback);
    });

    this.When(/^I click history menu$/, function() {
         mainMenu.clickMainMenuOption(1);
         mainMenu.clickAboutMenuOption(1);
    });

    this.When(/^I click contact menu$/, function() {
        mainMenu.clickMainMenuOption(4);
    });

    this.Then(/^I should see header 'Contact'$/, function(callback) {
        var condition = EC.textToBePresentInElement(contactPage.contactHeader, 'Contact');
        browser.wait(condition, 5000);
        this.expect(contactPage.contactHeader.getText()).to.eventually.equal('Contaca').and.notify(callback);
    });

    this.When(/^I click blog option menu$/, function() {
        mainMenu.clickMainMenuOption(3);
    });

    this.Then(/^I should see header 'Blog'$/, function(callback) {
        var condition = EC.textToBePresentInElement(blogPage.header, 'Blog');
        browser.wait(condition, 5000);
        this.expect(blogPage.header.getText()).to.eventually.equal('Blog').and.notify(callback);
    });

    this.When(/^I click services option menu$/, function () {
        mainMenu.clickMainMenuOption(2);
     });

    this.Then(/^I should see header 'Services'$/, function (callback) {
        var condition = EC.textToBePresentInElement(servicesPage.header, 'Services');
        browser.wait(condition, 5000);
        this.expect(servicesPage.header.getText()).to.eventually.equal('Services').and.notify(callback);
     });

    this.Then(/^I should see three feature headlines$/, function(callback) {
        var suffixes = ['A', 'B', 'C'];
        var promises = [homePage.featureHeaders.count()];
        for (var i=0; i<3; i++) {
            promises.push(homePage.getFeatureHeaderTextAtIdx(i));
        }

        var assertions = Q.all(promises);
        this.expect(assertions).to.eventually.deep.equal([3, 'Feature A', 'Feature B', 'Feature C']).and.notify(callback);
    });

    this.Then(/^I should see correct feature images and links$/, function(callback) {
        var asserts = [];
        var expected = [];
        var txt = '';
        for (var i=0; i<3; i++) {
            asserts.push(homePage.getFeatureHeaderAttribute(i, 'img', 'src'));
            expected.push(homePage.url.replace('index.html', '') + 'img/icon' + String(3-i) + '.png');
        }
        for (var j=0; j<3; j++) {
            asserts.push(homePage.featureHeaders.get(j).element(by.css('p')).getText());
            switch(j) {
                case 0:
                    txt = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
                    break;
                case 1:
                    txt = 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
                    break;
                case 2:
                    txt = 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.';
                    break;
                default:
                    txt = '';
                    break;
            }
            expected.push(txt);
        }
        this.expect(Q.all(asserts)).to.eventually.deep.equal(expected).and.notify(callback);
    });
};

var mainMenu = require('./pages/mainmenu.js');

var homePage = require('./pages/home');
var contactPage = require('./pages/contact');
var blogPage = require('./pages/blog');
var servicesPage = require('./pages/services');
var aboutPage = require('./pages/about');
var EC = protractor.ExpectedConditions;


describe('Protractor Workshop Home Page', function() {

  beforeEach(function() {
    homePage.go();
    //browser.get(homePage.url);
  });

  it('should have correct url address', function() {
    expect(browser.getCurrentUrl()).toEqual(homePage.url);
  });

  it('should have a title', function() {
    expect(homePage.getHomePageTitle).toEqual('Protractor workshop | Home');
  });

  it('should have a headline', function() {
    expect(homePage.exampleHeadline.getText()).toEqual('Example Headline 1');
    expect(homePage.exampleText.getText()).toEqual('Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.');
  });

  it('should have a main menu', function() {
    expect(mainMenu.mainMenuObject.count()).toEqual(5);
    expect(mainMenu.getMainMenuOptionName(0)).toEqual('Home');
    expect(mainMenu.getMainMenuOptionName(1)).toEqual('About');
    expect(mainMenu.getMainMenuOptionName(2)).toEqual('Services');
    expect(mainMenu.getMainMenuOptionName(3)).toEqual('Blog');
    expect(mainMenu.getMainMenuOptionName(4)).toEqual('Contact');
  });

  it('main menu options should have correct links', function() {
    expect(mainMenu.getMainMenuOptionAtIdx(0).getAttribute('href')).toEqual(homePage.url);
    expect(mainMenu.getMainMenuOptionAtIdx(1).getAttribute('href')).toEqual(aboutPage.url);
    expect(mainMenu.getMainMenuOptionAtIdx(2).getAttribute('href')).toEqual(servicesPage.url);
    expect(mainMenu.getMainMenuOptionAtIdx(3).getAttribute('href')).toEqual(blogPage.url);
    expect(mainMenu.getMainMenuOptionAtIdx(4).getAttribute('href')).toEqual(contactPage.url);
  });

  it('About menu should have three dropdown options', function() {
    expect(mainMenu.menuAbout.count()).toEqual(3);
  });

  it('click Company menu', function() {
    var condition = EC.textToBePresentInElement(aboutPage.header, 'About us');

    mainMenu.clickMainMenuOption(1);
    mainMenu.clickAboutMenuOption(0);
    browser.wait(condition, 5000);
    expect(aboutPage.header.getText()).toEqual('About us');
  });

  it('click History dropdown menu', function() {
    var condition = EC.textToBePresentInElement(aboutPage.header, 'About us');

    mainMenu.clickMainMenuOption(1);
    mainMenu.clickAboutMenuOption(1);
    browser.wait(condition, 5000);
    expect(aboutPage.header.getText()).toEqual('About us');
  });

  it('click Team dropdown menu', function() {
    var condition = EC.textToBePresentInElement(aboutPage.header, 'About us');

    mainMenu.clickMainMenuOption(1);
    mainMenu.clickAboutMenuOption(2);
    browser.wait(condition, 5000);
    expect(aboutPage.header.getText()).toEqual('About us');
  });

  it('click Contact menu', function() {
    var condition = EC.textToBePresentInElement(contactPage.contactHeader, 'Contact');

    mainMenu.clickMainMenuOption(4);
    browser.wait(condition, 5000);
    expect(contactPage.contactHeader.getText()).toEqual('Contact');
  });

  it('click Blog menu', function() {
    var condition = EC.textToBePresentInElement(blogPage.header, 'Blog');

    mainMenu.clickMainMenuOption(3);
    browser.wait(condition, 5000);
    expect(blogPage.header.getText()).toEqual('Blog');
  });

  it('click Services menu', function() {
    var condition = EC.textToBePresentInElement(servicesPage.header, 'Services');

    mainMenu.clickMainMenuOption(2);
    browser.wait(condition, 5000);
    expect(servicesPage.header.getText()).toEqual('Services');
  });

  it('should have three features headlines', function() {
    var suffixes = ['A', 'B', 'C'];
    expect(homePage.featureHeaders.count()).toEqual(3);
    for (var i=0; i<3; i++) {
      expect(homePage.getFeatureHeaderTextAtIdx(i)).toEqual('Feature ' + suffixes[i]);
    }
  });

  it('feature images and links should be correct', function() {
    var txt = '';

    for (var i=0; i<3; i++) {
        expect(homePage.getFeatureHeaderAttribute(i, 'img', 'src')).toEqual(homePage.url.replace('index.html', '') + 'img/icon' + String(3-i) + '.png');
        switch(i) {
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
        expect(homePage.featureHeaders.get(i).element(by.css('p')).getText()).toEqual(txt);
    }
  });
});

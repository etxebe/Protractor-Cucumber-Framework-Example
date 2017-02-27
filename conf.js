exports.config = {
  directConnect: true,
  framework: 'custom',
  // path relative to the current config file
   frameworkPath: require.resolve('protractor-cucumber-framework'),
//   resultJsonOutputFile: 'report.json',
//    getPageTimeout: 10,

  specs: [
    'features/*.feature'],

  capabilities: {
    'browserName': 'chrome'
  },

  onPrepare: function () {
    browser.manage().window().setSize(1680, 1050)
    browser.ignoreSynchronization = true
  },

  cucumberOpts: {
      require: ['features/step_definitions/my_step_definitions.js', 'features/step_definitions/hooks.js'],
      tags: false,
      format: ['json:report.json' ,'pretty'],
      profile: false,
      'no-source': true
    },
};

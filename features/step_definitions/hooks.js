var myHooks = function () {

//   this.After(function(scenario, next) {
//     browser.takeScreenshot().then(function(png) {
//       var fs = require('fs');
//
//       var decodedImage = new Buffer(png, 'base64').toString('binary');
////       scenario.attach(decodedImage, 'image/png', next);
//       scenario.attach(new Buffer(png, 'base64'), 'image/png');
//     }, function(err) {
//       next(err);
//     });
//   });

//   this.After(function(scenario) {
//     browser.takeScreenshot().then(function(buffer) {
//        scenario.attach(new Buffer(buffer, 'base64'), 'image/png');
//     });
//   });


//this.setDefaultTimeout(30000);

   this.After(function(scenario, callback) {
     if (scenario.isFailed()) {
        browser.takeScreenshot().then(function(buffer) {
            return scenario.attach(new Buffer(buffer, 'base64'), function(err) {
                callback(err);
            });
        });
     }
     else {
        callback();
     }
   });



//     if (scenario.isFailed()) {
//       webDriver.takeScreenshot().then(stream) {
//         scenario.attach(stream, 'image/png', function(err) {
//           callback(err);
//         });
//       }, function(err) {
//         callback(err);
//       });
//     }
//     else {
//       callback();
//     }


    this.AfterFeatures(function (event) {
        var reporter = require('cucumber-html-reporter');

        var options = {
                theme: 'bootstrap',
                jsonFile: 'C:\\home\\nauka\\ProtractorCucumberBDD\\report.json',
                output: 'report.html',
                reportSuiteAsScenarios: true,
                launchReport: false
            };

        reporter.generate(options);
    });
};

module.exports = myHooks;
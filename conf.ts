// Because this file imports from `protractor` npm package, 
// you'll need to have it as a project dependency. 
//
// `baseUrl` property is passed in as a param
import { Config, browser } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';

export let config: Config = {
  // directConnect: true,
  allScriptsTimeout: 110000,
  framework: 'jasmine',
  capabilities: {
    browserName: 'firefox'
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 150000,
    print: function () { }
  },

  // Keep max browsers running to 1 because
  // multiple browsers running at once was pausing/failing for no reason
  maxSessions: 1,

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,

  onPrepare: () => {
    // Use `jasmine-spec-reporter` as the spec result reporter
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    // Set browser window width to 1200 and height to 900px
    browser.driver.manage().window().maximize();
  },
  params: {
    //  baseUrl: 'https://dev43049.service-now.com/navpage.do'
    baseUrl: 'https://evaly.com.bd'
  },
  //  specs: [ 'specs/**/*spec.js' ],
  //  specs: [ 'specs/**/*spec.js' ],

  specs: ['specs/login/login.spec.js', 'specs/home/validate.spec.js', 'specs/home/motorbike.spec.js', 'specs/home/email.spec.js',],

  seleniumAddress: 'http://localhost:4444/wd/hub'
};

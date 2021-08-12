'use strict';
const config = require('./protractor.shared.conf').config;
//driver = webdriver.Remote(command_executor='http://https://zalenium-iac-qaf-dev.apps.chi01.chi.dev.cl1.paas.cloudcenter.corp/wd/hub',desired_capabilities=DesiredCapabilities.CHROME)
//config.seleniumAddress = webdriver.Remote(command_executor='http://https://zalenium-iac-qaf-dev.apps.chi01.chi.dev.cl1.paas.cloudcenter.corp/wd/hub',desired_capabilities=DesiredCapabilities.CHROME);
config.seleniumAddress = 'http://localhost:4444/wd/hub/';



config.multiCapabilities = [
    {
        browserName: 'chrome',
        chromeOptions: {
            args: ['disable-infobars',
            '--disable-print-preview',
            'ignore-certificate-errors',
            '--test-type=browser',
            '--no-sandbox'],
            'excludeSwitches': ['enable-automation'],
            'useAutomationExtension': false,
            prefs: {
                //"--incognito",'--headless','--test-type=browser',
                        download: {
                        //'plugins.always_open_pdf_externally': true, 
                          default_directory:   process.env.REMOTE_DOWNLOAD_DIR,
                          //default_directory:   'Descargas',
                          prompt_for_download: false,
                          directory_upgrade:   true,
                          extensions_to_open:  '',
                        },
                        plugins: {
                          plugins_disabled: ['Chrome PDF Viewer'],
                          always_open_pdf_externally: false // disable viewing pdf files after download
                        },
                  },
        },
 
        shardTestFiles: true,
        maxInstances: 5,
        deviceProperties:{
            browser: {
                name: 'chrome',
                version: 'latest'
            },
            device: 'local development machine',
            platform: {
                name: 'Microsoft',
                version: 'Windows 10'
            }
        }
    },
 /*   {
        browserName: 'firefox',
        shardTestFiles: true,
        maxInstances: 5,
        deviceProperties:{
            browser: {
                name: 'firefox',
                version: 'latest'
            },
            device: 'local development machine',
            platform: {
                name: 'osx',
                version: '10.12.6'
            }
        }
    }*/
];

exports.config = config;

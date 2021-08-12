'use strict';
const config = require('./protractor.shared.conf').config;

config.capabilities = {
    browserName: 'chrome',
    chromeOptions: {
        args: ['disable-infobars']
    },
    shardTestFiles: true,
    //maxInstances: 5,
    deviceProperties: {
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
};

exports.config = config;

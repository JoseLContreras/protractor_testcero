'use strict';
const argv = require('yargs').argv;
const fs = require('fs-extra');
const path = require('path');

let momentoActualGlobal = new Date();
    let horaGlobal = momentoActualGlobal.getHours();
    let minutoGlobal = momentoActualGlobal.getMinutes();
    let anioGlobal = momentoActualGlobal.getFullYear(); 
    let diaGlobal = momentoActualGlobal.getDate();
    let segGlobal = momentoActualGlobal.getMilliseconds();
    let mesGlobal = momentoActualGlobal.getMonth()+1;
    let versionEjecucionGlobal = "-v-"+anioGlobal+diaGlobal+'0'+mesGlobal+"-"+horaGlobal+minutoGlobal;
    console.log ("__dirname "+__dirname);

exports.config = {
    /**
     * Protractor specific
     */
    allScriptsTimeout: 120000,
    disableChecks: true,

    beforeLaunch: () => {
        console.log(`\n=====================================================================================================`);
        console.log(`\nGenerando la version de ejecucion actual para el historio de ejecuciones y posterior metrica de uso\n`);
        console.log(`=====================================================================================================\n`);
    

        var version = new Object();
        version.GlobalFormato = 'e2e/tmp/Report'+versionEjecucionGlobal;        

        //lo que trae dirname : D:\workspace_local\PROT-e2e-Tests-PUC\Cucumber-e2e-PUC\e2e\src\config
        let rutaOutput = path.resolve(process.cwd());
        console.log ("lo que trae rutaOutput "+rutaOutput);
        //let rutaOutput = __dirname.slice(0,58)

        let ejecucionFinal = rutaOutput+'/e2e/src/data/Report.json';
        console.log ("ruta con nombre global de ejecucion con formato "+ejecucionFinal);
        fs.removeSync(ejecucionFinal);
        
        fs.writeFile(ejecucionFinal, JSON.stringify(version),'utf8', (err) => {
           if (err) throw err;
           console.log('Se creo JSON de salida!');
         });
    },

    /**
     * CucumberJS specific
     */
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: [
            path.resolve(process.cwd(), './e2e/**/**/after.scenario.ts'),
            path.resolve(process.cwd(), './e2e/**/**/cucumber.config.ts'),
            path.resolve(process.cwd(), './e2e/**/**/*.steps.ts')
        ],
        format: 'json:e2e/tmp/Report'+versionEjecucionGlobal+'/results.json',
        tags: argv.tags || ''
    },
    specs: getFeatureFiles(),

    /**
     * From `protractor-cucumber-framework`, allows cucumber to handle the 199
     * exception and record it appropriately
     */
    ignoreUncaughtExceptions: true,

    /**
     * The new reporting plugin
     */
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            automaticallyGenerateReport: true,
            metadataKey: 'deviceProperties',
            removeExistingJsonReportFile: true,
            removeOriginalJsonReportFile: true
        }
    }]
};

/**
 * Get the featurefiles that need to be run based on an command line flag that is passed, if nothing is passed all the
 * featurefiles are run
 *
 * @example:
 *
 * <pre>
 *     // For 1 feature
 *     npm run e2e -- --feature=playground
 *
 *     // For multiple features
 *     npm run e2e -- --feature=playground,dashboard,...
 *
 *     // Else
 *     npm run e2e
 * </pre>
 */
 function getFeatureFiles() {
    if (argv.feature) {
        return argv.feature.split(',').map(feature => `${process.cwd()}/e2e/**/**/${feature}.feature`);
    }

    return [`${process.cwd()}/e2e/**/**/*.feature`];
}

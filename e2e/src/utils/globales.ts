var fs = require('fs');
import * as path from 'path';
import {WriteStream, ensureDirSync, createWriteStream} from 'fs-extra';
import { browser, by, element, ExpectedConditions } from 'protractor';
let directorioActualEjecucion = require ('../data/Report.json');

export class fGlobales {

    


    constructor() {
    
         
    }

    

   public writeScreenShot(screenshot: string, filename: string) {
    let screenshotAUX = directorioActualEjecucion.GlobalFormato
    const screenshotPath = path.resolve(screenshotAUX+'/screenshots/');
    const filepath = path.resolve(screenshotPath, filename);
    let stream: WriteStream;
    ensureDirSync(screenshotPath);
    stream = createWriteStream(filepath);
    stream.write(new Buffer(screenshot, 'base64'));
    stream.end();
   }

 
 
 


   }
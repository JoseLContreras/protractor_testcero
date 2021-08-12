import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { expect } from '../config/helpers/chai-imports';  //para usar expect

import { fGlobales } from "../utils/globales";
const Globales: fGlobales = new fGlobales();

export class PaginaPrincipal {

    public btnLearnAngular : any;
    public btnCliAngular : any;
    public btnAngularBlog : any;
    public btnIconoAnimaciones : any;
    public btnIconoProtractor : any;
    


    constructor() {
        this.btnLearnAngular = element(by.xpath('/html/body/app-root/div[2]/div[2]/a[1]/span'));
        this.btnCliAngular = element(by.xpath('/html/body/app-root/div[2]/div[2]/a[2]/span'));
        this.btnAngularBlog = element (by.xpath('/html/body/app-root/div[2]/div[2]/a[3]/span'));
        this.btnIconoAnimaciones = element(by.xpath('/html/body/app-root/div[2]/div[5]/a[1]'));
        this.btnIconoProtractor = element (by.xpath('/html/body/app-root/div[2]/div[5]/a[4]'));


    }

    
    
    public async SetIngresarUrl (valorActual:any) {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        await browser.get(valorActual)
        await browser.sleep(3000);   
        browser.takeScreenshot().then(function (png) {
            Globales.writeScreenShot(png, 'Step1.png');
        });      
        await browser.sleep(1000); 
    }

    public async SetBtnLearnAngular (){
        let  newWindowHandle:any
        this.btnLearnAngular.click();
        await browser.sleep(1000);   
        browser.takeScreenshot().then(function (png) {
            Globales.writeScreenShot(png, 'Step2.png');
        }); 
        console.log('click en Boton Learn Angular');  
        await browser.getAllWindowHandles().then(async function (handles) {
            newWindowHandle = handles[1];
            browser.waitForAngularEnabled(false);
            browser.switchTo().window(newWindowHandle);
            await browser.sleep(3000); 
            console.log('cambie de pestaña')   
            browser.close();
            browser.getAllWindowHandles().then(function(handles) {
              newWindowHandle = handles[0];
              browser.switchTo().window(newWindowHandle);           
            });
            await browser.sleep(2000);                     
        }); 

    }

    public async SetBtnCliAngular (){
        let  newWindowHandle:any
        this.btnCliAngular.click();
        await browser.sleep(1000);   
        browser.takeScreenshot().then(function (png) {
            Globales.writeScreenShot(png, 'Step3.png');
        }); 
        console.log('click en Boton Cli Documentation');  
        await browser.getAllWindowHandles().then(async function (handles) {
            newWindowHandle = handles[1];
            browser.waitForAngularEnabled(false);
            browser.switchTo().window(newWindowHandle);
            await browser.sleep(3000); 
            console.log('cambie de pestaña')   
            browser.close();
            browser.getAllWindowHandles().then(function(handles) {
              newWindowHandle = handles[0];
              browser.switchTo().window(newWindowHandle);           
            });
            await browser.sleep(2000); 
                                      
        }); 

    }

    public async SetBtnAngularBlog (){
        let  newWindowHandle:any
        this.btnAngularBlog.click();
        await browser.sleep(1000);   
        browser.takeScreenshot().then(function (png) {
            Globales.writeScreenShot(png, 'Step4.png');
        }); 
        console.log('click en Boton Angular Blog');  
        await browser.getAllWindowHandles().then(async function (handles) {
            newWindowHandle = handles[1];
            browser.waitForAngularEnabled(false);
            browser.switchTo().window(newWindowHandle);
            await browser.sleep(3000); 
            console.log('cambie de pestaña')   
            browser.close();
            browser.getAllWindowHandles().then(function(handles) {
              newWindowHandle = handles[0];
              browser.switchTo().window(newWindowHandle);           
            });
            await browser.sleep(2000); 
                                      
        }); 

    }

    public async SetBtnIconoAnimaciones (){
        let  newWindowHandle:any
        this.btnIconoAnimaciones.click();
        await browser.sleep(1000);   
        browser.takeScreenshot().then(function (png) {
            Globales.writeScreenShot(png, 'Step5.png');
        }); 
        console.log('click en Boton Icono Animaciones');  
        await browser.getAllWindowHandles().then(async function (handles) {
            newWindowHandle = handles[1];
            browser.waitForAngularEnabled(false);
            browser.switchTo().window(newWindowHandle);
            await browser.sleep(3000); 
            console.log('cambie de pestaña')   
            browser.close();
            browser.getAllWindowHandles().then(function(handles) {
              newWindowHandle = handles[0];
              browser.switchTo().window(newWindowHandle);           
            });
            await browser.sleep(2000); 
                                      
        }); 

    }

    public async SetBtnIconoProtractor (){
        let  newWindowHandle:any
        this.btnIconoProtractor.click(); 
        await browser.sleep(1000);   
        browser.takeScreenshot().then(function (png) {
            Globales.writeScreenShot(png, 'Step6.png');
        }); 
        console.log('click en Boton Icono Protractor');  
        await browser.getAllWindowHandles().then(async function (handles) {
            newWindowHandle = handles[1];
            browser.waitForAngularEnabled(false);
            browser.switchTo().window(newWindowHandle);
            await browser.sleep(15000); 
            console.log('cambie de pestaña')   
            browser.close();
            browser.getAllWindowHandles().then(function(handles) {
              newWindowHandle = handles[0];
              browser.switchTo().window(newWindowHandle);           
            });
            await browser.sleep(3000); 
                                      
        }); 

    }






}
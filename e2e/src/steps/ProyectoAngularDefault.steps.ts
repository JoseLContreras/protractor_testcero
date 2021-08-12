import { defineSupportCode } from 'cucumber';


import { PaginaPrincipal } from "../pages/PaginaPrincipal.po";
const HomePrincipal: PaginaPrincipal = new PaginaPrincipal();






const DataIn = require ('../data/PlantillaAngular.json');

defineSupportCode(({Given, Then, When}) => {

    Given(/^Ingreso al Sitio Angular$/,IngresoAlSitio);
    async function IngresoAlSitio () : Promise<void> { 
      await HomePrincipal.SetIngresarUrl(DataIn.Datos.UrlAmbiente);
      await HomePrincipal.SetBtnLearnAngular();
      await HomePrincipal.SetBtnCliAngular();
      await HomePrincipal.SetBtnAngularBlog();
      await HomePrincipal.SetBtnIconoAnimaciones();
      await HomePrincipal.SetBtnIconoProtractor();
    }

    
    When(/^Presiono botones disponibles en area Recursos$/,RecorridoAreaRecursos);
    async function RecorridoAreaRecursos () : Promise<void> {


    }

    Then(/^Valido Despliegue Exitoso de Recursos mostrados en Pagina Principal$/,ValidacionAreaRecursos);
    async function ValidacionAreaRecursos () : Promise<void> {
      
    }
  
  }); 


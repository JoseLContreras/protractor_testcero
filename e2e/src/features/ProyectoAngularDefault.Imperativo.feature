
Feature: Probar Sitio Angular 

Como Testing Enginner
Quiero Probar de forma automatizada el Sitio Angular Creado
Para validar funcionamiento del Sitio Angular Creado

    Background:
        Given Ingreso al Sitio Angular "http://localhost:4200/"   

    Scenario: Recorrido Area Recursos
        When Presiono boton "Learn Angular"
        And Valido Despiegue Pagina "https://angular.io/tutorial"
        And Presiono boton "CLI Documentation"
        And Valido Despiegue Pagina "https://angular.io/cli"
        And Presiono boton "Angular Blog"
        And Valido Despiegue Pagina "https://blog.angular.io/"
        And Presiono boton Icono "Animaciones"
        And Valido Despiegue Pagina "https://angular.io/guide/animations"
        And Presiono boton Icono "Protractor"
        And Valido Despiegue Pagina "https://www.protractortest.org/#/"
        Then Valido Despliegue Exitoso de Recursos mostrados en Pagina Principal
 
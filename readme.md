- Realizar la descargar de las dependencias:
  npm i

- Descargar componente de selenium webdriver-manager:
  webdriver-manager update --versions.chrome=86.0.4240.75 --ignore_ssl=true
  (86.0.4240.75) debe coincidir con la version actual del navegador chrome instalado

- Ejecutar el servidor de selenium:
  webdriver-manager start --versions.chrome 86.0.4240.75
  (86.0.4240.75) debe coincidir con la version actual de chrome driver descargado con la instruccion update

- lanzar las pruebas e2e:
  npm run e2e
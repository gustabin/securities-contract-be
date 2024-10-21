
NestJS Template
Template de NestJS backEnd para despliegues en OCP

Instalar las dependencias

```
npm i
```

**Consideraciones:** 
* Se encuentra configurado healthCheck en la ruta **"/health"**
* Al crear recursos controllers/services,  se recomienda mover los archivos ***.spec.ts** a la carpeta test
* Se encuentra configurado el global pipes para poder verificar la data enviada con los dtos creados
* Se encuentra configurado los CORS, revisar el archivo **main.ts**
* Se encuentra configurado helmet. Ayuda a proteger la aplicación de algunas vulnerabilidades web conocidas mediante el establecimiento correcto de cabeceras HTTP. Revisar el archivo **main.ts**
* Se encuentra configurado **Swagger** en la ruta **"/swagger"**, revisar el archivo **main.ts**


Getting started
To make it easy for you to get started with GitLab, here's a list of recommended next steps.
Already a pro? Just edit this README.md and make it your own. Want to make it easy? Use the template at the bottom!



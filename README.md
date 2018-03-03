Racks App
=====

## Explicación de la estructura del proyecto

Carpetas en latte/

 1. app: El código fuente del módulo(CRUD)
 2. app\php: es donde Vive el modelo, estos son clases PHP que mapean cada tabla de la base de datos,
    es donde se hacen consultas o inserciones a la base datos, etc: digamos que es el ORM.
    
 3. app\ts: Es donde vive la lógica de las vista.
    En este carpeta es donde vive la lógica que contrala toda las funcionalidades, el punto de entrada es la clase Main y
    la vista principal es MainView que es el ViewController de la App.
    
 4. app\view: Es donde está maquetada la interfaz de usuario.  

Nota: Se usa TypeScript como lenguaje principal para escribir las clases js.

## Instrucciones para instalación en servidor local

1. Crear base de datos con el nombre "racks".

2. Configurar conexión a la base de datos, editar archivo connection.json que se encuentra en la raíz de proyecto.
   
```json
{
  "host": "127.0.0.1",
  "user": "root",
  "password": "",
  "database": "racks"
}

```   
3. Importar del archivo racks.sql que se encuentra también en la raíz del proyecto.

4. Crear virtual host que apunte a la carpeta public del proyecto

e.g. 
```apacheconfig
<VirtualHost *:80>
    DocumentRoot "path/Racks/public"
    ServerName rasks.local
</VirtualHost>
```

Donde: 
path = Directorio donde se encuentra alojado el proyecto.

e.g. c:\Projects

5. Configurar Site local del archivo Hosts

```apacheconfig
# My Hosts
127.0.0.1       racks.local
```

6. Reiniciar el servidor Apache

7. Ejecutar en el navegador escribir en la barra de direcciones http://racks.local y listo

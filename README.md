# MANUAL DE CALCULADORAPROJECTEGRUP

## DEPENDENCIES
A continuació una llista de les eines que necessitarem al projecte:

    1. Python3
    2. Apache
    3. Ajax
    4. Wsgi (mod_wsgi)
    
## GUÍA D'INICI
Amb l'ús del mod_wsgi disponible a l'Apache 2, podem fer servir l'aplicació al mateix servidor Apache.

Creant un nou lloc web amb l'Apache (muntar un nou VirtualHost), podem afegir l'etiqueta 'WSGIScriptAlias' i seguidament afegir entre cometes la localització de l'arxiu 'testflask.py'. Per exemple, afegir dins de VirtualHost | WSGIScriptAlias "/" "carpeta/testflask.wsgi". Recorda habilitar-ho amb 'aensite2 "nom"'.

Dins de l'arxiu WSGI, hem d'afegir 
    '   import sys
        sys.path.insert(0, "localitzacio/python")
        from calc import app as application
    '
    
Restablim el servidor Apache i ja hauriem de poder accedir a la nostra aplicació. S'utilitza per defecte el port 80 a la aplicació de la calculadora.


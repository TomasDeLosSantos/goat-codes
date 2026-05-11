# Proyecto Final: Ecommerce de Videojuegos

## Goat Codes

Este proyecto fué desarrollado con React y Firebase. Para el estilo de la web se incluyó la librería de componentes Chakra UI (https://chakra-ui.com/) e íconos de FontAwesome (https://fontawesome.com/).

### Proceso de compra
El usuario puede acceder al catálogo de juegos, almacenados en la base ded datos de Firebase, y armar su carrito. Cada item tiene su vista de detalle (/game/:id) donde hay una descripción del juego y se puede elegir la cantidad a agregar a la compra. 
Se puede filtrar por categorías (/category/:category), en este caso son las diferentes plataformas para las que la web ofrece sus juegos. 
Desde la vista de carrito, siempre accesible desde su respectivo botón, se pueden sacar elementos del carrito, vaciarlo o finalizar la compra.

En la vista de compra el usuario debe ingresar su nombre, número de telefono y email para poder finalizar la compra. Al ingresar los campos a validar, se genera la órden de compra. En la base de datos se almacena la compra realizada y se muestra al usuario el ID correspondiente a su ticket.

Como funciones extra, la web cuenta con un selector de modo claro/oscuro siempre accesible desde el menú de navegación.

### Deploy
Puede accederse directamente a la web desde el link generado por el deploy a través de Vercel:
https://goat-codes.vercel.app/

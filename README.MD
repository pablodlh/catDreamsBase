API de Gestión de Animales

Esta API permite gestionar información sobre animales disponibles para adopción. Proporciona endpoints para listar, crear, adoptar y obtener información de un animal en particular.

Endpoints

1. Listar Animales

URL: https://listanimals-vfo34hjeea-uc.a.run.appMétodo: GETDescripción: Obtiene una lista de animales con la opción de aplicar filtros.

Parámetros opcionales:

type: Filtra por tipo de animal (ej. perro, gato).

location: Filtra por ubicación.

adopted: Filtra por estado de adopción (true o false).

Ejemplo de solicitud:

curl "https://listanimals-vfo34hjeea-uc.a.run.app?type=perro&location=Mexico"

2. Crear un Nuevo Animal

URL: https://createanimal-vfo34hjeea-uc.a.run.appMétodo: POSTDescripción: Registra un nuevo animal en la base de datos.

Cuerpo de la solicitud (JSON):

{
  "type": "perro",
  "name": "Firulais",
  "image": "https://example.com/firulais.jpg",
  "age": 3,
  "description": "Un perro juguetón y amigable.",
  "location": "Mexico"
}

Ejemplo de solicitud:

curl -X POST "https://createanimal-vfo34hjeea-uc.a.run.app" \
     -H "Content-Type: application/json" \
     -d '{"type": "perro", "name": "Firulais", "image": "https://example.com/firulais.jpg", "age": 3, "description": "Un perro juguetón y amigable.", "location": "Mexico"}'

3. Adoptar un Animal

URL: https://adoptanimal-vfo34hjeea-uc.a.run.appMétodo: POSTDescripción: Marca un animal como adoptado y registra el nombre del adoptante.

Cuerpo de la solicitud (JSON):

{
  "animalId": "12345",
  "adopterName": "Juan Perez"
}

Ejemplo de solicitud:

curl -X POST "https://adoptanimal-vfo34hjeea-uc.a.run.app" \
     -H "Content-Type: application/json" \
     -d '{"animalId": "12345", "adopterName": "Juan Perez"}'

4. Obtener Información de un Animal

URL: https://getanimal-vfo34hjeea-uc.a.run.appMétodo: GETDescripción: Recupera la información de un animal por su ID.

Parámetro requerido:

id: ID del animal a consultar.

Ejemplo de solicitud:

curl "https://getanimal-vfo34hjeea-uc.a.run.app?id=12345"

Notas

La API está construida con Firebase Functions y Firestore como base de datos.

Solo las solicitudes POST están permitidas para crear y adoptar animales.

Asegúrate de enviar los datos en formato JSON.
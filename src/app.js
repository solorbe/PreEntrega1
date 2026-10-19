import express from 'express';
export const app = express();

// express.json() es un middleware que parsea el body de las peticiones entrantes cuando vienen con Content-Type: application/json, y lo deja disponible como objeto JS en req.body. 

// Sin este middleware,en un POST o PUT, req.body llega undefined, aunque el cliente sí haya mandado JSON.
// El orden de app.use() importa: los middlewares se ejecutan en el orden en que se registran, y las rutas de más abajo solo ven el
// resultado de los middlewares que se registraron antes. Entonces; express.json() va primero: así req.body ya está listo para cuando
// llegue a cualquier ruta.
app.use(express.json());

// Un middleware recibe (req, res, next). Es OBLIGATORIO llamar a next() cuando termina su trabajo: eso le dice a Express "seguí con el próximo middleware o ruta". Si no lo llamamos, la petición queda colgada para siempre (el cliente nunca recibe respuesta).
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Endpoints de estado del servidor (no son un recurso de la API, por eso
// se quedan acá y no en un router).
app.get('/', (req, res) => {
  res.status(200).json({
    mensaje: 'Backend II',
    status: 'activo',
  });
});

app.get('/health', (req, res) => {
  // process.uptime() devuelve, en segundos, cuánto tiempo lleva
  // corriendo el proceso de Node. Es un chequeo típico para saber
  // si el servidor sigue "vivo".
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
  });
});

export default app;
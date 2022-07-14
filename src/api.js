const express = require('express');
require('express-async-errors');
const loginRouter = require('./database/routes/loginRoute');
const errorMiddlewareHandler = require('./database/middlewares/errorHandlerMiddleware');

// ...

const app = express();

app.use(express.json());

// ...
app.use('/login', loginRouter);

app.use(errorMiddlewareHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

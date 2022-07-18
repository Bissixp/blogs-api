const express = require('express');
require('express-async-errors');
const loginRouter = require('./routes/loginRoute');
const userRouter = require('./routes/userRoute');
const errorMiddlewareHandler = require('./middlewares/errorHandlerMiddleware');

// ...

const app = express();

app.use(express.json());

// ...
app.use('/login', loginRouter);
app.use('/user', userRouter);

app.use(errorMiddlewareHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

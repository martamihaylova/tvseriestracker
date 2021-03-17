const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const routes = require('./config/routes');
const app =  express();

require('./config/express')(app);
require('./config/mongoose');
require('./config/routes')(app);
app.use(cors());
app.use('/api', routes);
console.log(process.env.NODE_ENV);

app.listen(config.PORT, console.log.bind(console, `Server listening on port ${config.PORT}...`));
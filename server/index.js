const express = require('express');
const cors = require('cors');
const config = require('./config/config');
// const routes = require('./config/routes');
const app =  express();

app.use(cors());
require('./config/express')(app);
require('./config/mongoose');
require('./config/routes')(app);
// app.use(routes);
// app.use((req, res, next) => {
//     console.log(req.session); 
//     console.log(req.user);
//     console.log('hello');
//     // res.json({data: 'Hello'});
//     // next()
// });

app.listen(config.PORT, console.log.bind(console, `Server listening on port ${config.PORT}...`));
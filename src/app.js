import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// import User from './models/user';
// import Device from './models/device'

import config from 'config';
import routes from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api/v1', routes);

const port = process.env.PORT || config.server.port;
app.listen(port);
console.log('Node + Express REST API skeleton server started on port: ' + port);

module.exports = app;
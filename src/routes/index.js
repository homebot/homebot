const express = require('express');

// import auth from './auth'; MOVE to users
// import users from '../modules/users/routes';
// import devices from '../modules/devices/routes';
// import alisa from '../modules/alisa/routes';
const alisa = require('../../node_modules/homebot-alisa/src/routes');
const devices = require('../../node_modules/homebot-devices/src/routes');

const response = require('../helpers/response');

const routes = express.Router();
routes.use(response.setHeadersForCORS);

// TODO 
// routes.use('/api/auth', auth);
// routes.use('/users', users);
routes.use('/devices', devices);
routes.use('/api/alisa', alisa);

routes.use(function (req, res) {
  response.sendNotFound(res);
});

module.exports = routes;
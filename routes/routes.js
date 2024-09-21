const express = require('express');
const routes = express.Router();
const hp = require('../controller/HpController');
routes.get('/', hp.nom);

module.exports = routes;
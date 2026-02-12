var express = require('express');
var router = express.Router();
const User = require("../models/users");
const fetch = require('node-fetch');
const { checkBody } = require('../modules/checkBody')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

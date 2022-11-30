const express = require("express");
const router = express.Router();

const controllerPost = require('../controller/controller');
const myLogger = require("../middleware/middlewares");

// const myLogger = function (req, res, next) {
//     console.log('LOGGED')
//     next()
//   }
  
router.get('/read',myLogger, controllerPost.ReadPost);
router.post('/post',myLogger, controllerPost.ReadPost);


module.exports = router;
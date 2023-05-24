const express = require('express');
const userController = require('../controller/userController')
const router = express.Router();
const authMiddleware = require('../auth/auth');
const connect = require('../connect/connect')

const isAuth = authMiddleware.isAuth;

router.post('/login', userController.login)
router.post('/register', userController.register)
router.get('/favourite',isAuth,(req,res)=>{
    connect.query('SELECT * from `favourite` where username = ?', [req.user.username], function (error, results, fields) {
        if (error) throw error;
        res.send(results)
      });
})
router.post('/favourite',isAuth,(req,res)=>{
    connect.query('INSERT INTO  `favourite` SET username = ?, idsong = ?', [req.user.username , req.body.idSong], function (error, results, fields) {
        if (error) throw error;
        res.send(req.body)
      });
})
module.exports = router;


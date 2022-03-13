const express = require('express');
const router = express.Router();
const user = require('../controllers/user');


router.get('/', (req,res,) => {

    res.render('start');

});

router.get('/register', (req,res) => {
    res.status(200)
    res.render('register');
})

router.get('/create', user.store)

router.get('/users', (req,res) => {
    res.status(200);
    res.render('userindex');
})

module.exports = router;
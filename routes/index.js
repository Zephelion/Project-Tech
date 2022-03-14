const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const user = require('../controllers/user');


router.get('/', (req,res,) => {

    res.render('start');

});

router.get('/users', user.fetch);

router.get('/create', user.pass);

router.get('/register', (req,res) => {
    res.render('register');
})
router.post('/register', user.store);


module.exports = router;
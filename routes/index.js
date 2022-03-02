const express = require('express');
// const router = express.Router();
const router = express();

const namedRoutes = require('named-routes');
const route = new namedRoutes();

route.extendExpress(router);
route.registerAppHelpers(router);

router.get('/', (req,res,) => {

    res.render('start');

});

// url('index');



router.get('/register', (req,res) => {
    res.status(200)
    res.render('register');
})

router.get('/about', (req,res) => {
    res.send('hier komt de about');
})

module.exports = router;
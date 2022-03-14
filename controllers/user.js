const User = require('../models/User');

const storeUser = (req,res) => {
    
    if(req.body.password == req.body.confirmpassword){

        const form = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            email: req.body.email,
            password: req.body.password,
        }

        const user = new User(form);
        user.save(function(err){
            // if(err) return handleError(err);
        });

        res.redirect('/create');

    }
}

const passUser = (req,res) =>{
    const userInfo = req.query;

    res.render('step', {
        info:userInfo,
    })
}

const fetchUsers = (req,res) => {
    User.find().lean().then(users => {
        res.render('userindex', {
            users:users,
        })
    })
}


module.exports = {
    store: storeUser,
    fetch: fetchUsers,
    pass: passUser
}
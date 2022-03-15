const User = require('../models/User');
const Goals = require('../models/Goal');
const UserGoals = require('../models/UserGoal');

const storeUser = (req,res) => {

        const form = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            email: req.body.email,
            password: req.body.password,
        }

        const user = new User(form);
        
        user.save(function(err){
            
 
        })

        res.redirect('/users');

        // const savedUser = await User.findOne({email: req.body.email}).lean();
        // const userGoals = new UserGoals({
        //     goals: req.body.goals,
        //     user:  savedUser, 
        // })

        // userGoals.save()




        // user.save().then(user => {

        //     console.log(user);
        //     const user_goals = {
        //         user:user,
        //         goals:req.body.goals
        //     }
        //     console.log(user_goals)
        //     const userGoals = new UserGoals(user_goals);
            
        //     userGoals.save();

        //     res.redirect('/users');
        // })


}

const passUser = (req,res) =>{
    const userInfo = req.query;
    Goals.find().lean().then(goals =>{
        res.render('step', {

            info:userInfo,
            goals:goals,
        })

    })

}



const fetchUsers = (req,res) => {
    User.find().lean().then(users => {

        // console.log(users);
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
const  mongoose  = require("mongoose");

const goalSchema = new mongoose.Schema({

    user: { type: Schema.Types.ObjectId, ref: 'User' },
    goals: [{ type: Schema.Types.ObjectId, ref: 'Goal' }],

})

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal
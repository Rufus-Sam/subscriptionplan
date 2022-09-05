const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    duration: String,
    planType: String
}) 

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    currentPlan: {
        type: planSchema,
        default: {duration: null,planType:null}
    }
})

const User = mongoose.model('User',userSchema);
module.exports = User;
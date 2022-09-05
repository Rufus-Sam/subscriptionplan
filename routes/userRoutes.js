const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
// create new user
router.post('/',async(req,res)=>{

    const exists = User.find({email : req.body.email});
    if(exists){
        return res.send("Already Exists");
    }
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        currentPlan: req.body.currentPlan
    })
    try{
        const newuser = await user.save();
        res.send(newuser);
    }catch(e){
        res.send(e.message);
    }

})
// check user
router.get('/:email',async(req,res)=>{
    const user = User.find({email: req.params.email});
    if(user){
        if(user.password === req.body.password){
            res.send("Logged in");
        }else{
            res.send("Wrong password");
        }
    }else{
        res.send("No email found");
    }
})


module.exports = router;
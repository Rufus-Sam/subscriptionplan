require('dotenv').config();
//express app
const express = require('express');
const app = express();

//DB connect
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI).then(()=> console.log("Mongodb connected"));

//import routes
const userRoutes = require('./routes/userRoutes.js');
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use('/users',userRoutes);

app.get('/',(req,res)=>{
    res.redirect('/users');
})

app.listen(process.env.PORT , ()=> {
    console.log("Server running");
})
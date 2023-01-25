const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect("mongodb+srv://rohit:rohit123@cluster0.vz5zqkf.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('connected successfully');
}).catch(()=>{
    throw new Error("Something went wrong");
})
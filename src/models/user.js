const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:4,
        maxlength:24
    },
    firebase:{
      type : String,
       required:true,
       unique:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email already exists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email");
            }
        }
    },
    Phone:{
        type:Number,
        max:9999999999
        
    },
    rollno:{
        type:String,
        required:true,
        unique:true,
    },
    picUrl:{
        type:String
    }
    })

    const User = new mongoose.model("User",userSchema);
    module.exports = User;
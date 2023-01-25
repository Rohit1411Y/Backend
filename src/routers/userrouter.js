const express = require('express');
const router = new express.Router();
 const User = require('../models/user');
 module.exports = router;
 router.post("/users",(req,res)=>{
    const stud = new User(req.body);
    stud.save().then(()=>{
        res.status(201).send(stud);
    }).catch((err)=>{
        console.log(err);
        res.status(404).send(err);
    })
 });
 router.get("/users",async(req,res)=>{
  try{
    const data = await User.find();
    res.status(200).send(data);
  }catch(err){
    res.status(400).send(err);
  }
 })
 router.get("/users/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const data = await User.findById(_id);
        res.status(200).send(data);
    }catch(err){
        res.status(400).send(err);
    }
 })
 router.patch("/users/:id",async(req,res)=>{
  try{
    const _id = req.params.id;
    const updateUser = await User.findByIdAndUpdate(_id,req.body,{
        new:true
    })
    res.status(200).send(updateUser);
  }catch(err){
    console.log(err);
    res.status(400).send(err);
  }
 })
 router.delete("/users/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteUser = await User.findByIdAndDelete(_id);
        if(!_id){
            res.status(404).send("Something went wrong");

        }
        res.status(200).send(deleteUser);
    }catch(err){
        res.status(500).send(err);
    }
 })
 
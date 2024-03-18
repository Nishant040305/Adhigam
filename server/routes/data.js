const express = require('express');
const router = express.Router();
const User = require("../models/Credentials"); 

router.post('/data', async(req,res)=>{
    try{
        let user = await User.findOne({_id:req.body.id});
        console.log({courses:user.courses})

        res.json({courses:user.courses});
    }
    catch(error){
        console.error(error.message);
    res.status(500).send("internal server error")
    }
})
router.post('/join',async(req,res)=>{
    console.log(req.body);
    try{
        
        let user = await User.findOne({_id:req.body.id});
        if(!user){
            return res.status(404).send("User not found");
        }
        else{
            // Append courseName to the user's courses

            user.courses.push(req.body.courseName);

            // Save the updated user document
            await user.save();
        }
        

    }catch(error){
        console.error(error.message);
        res.status(500).send("internal server error")
    }
})
router.post('/create',async(req,res)=>{
    try{
        let user = await User.findOne({_id:req.body.id});
        
    }catch(error){
        console.error(error.message);
        res.status(500).send("internal server error")
    }
})
module.exports = router;

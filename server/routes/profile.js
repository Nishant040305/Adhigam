const express = require('express');
const router = express.Router();
const User = require("../models/Credentials"); 

router.post('/', async(req,res)=>{
    try{
        let user = await User.findOne({_id:req.body.id});
        console.log({user})

        res.json({user});
    }
    catch(error){
        console.error(error.message);
    res.status(500).send("internal server error")
    }
})

module.exports = router;

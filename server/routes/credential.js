const express = require('express');
const router = express.Router();
const User = require("../models/Credentials"); 
const {body,validationResult} = require("express-validator");
const bcrypt  = require("bcryptjs");
var jwt = require("jsonwebtoken");
const jwt_SECREAT = "NaJidhiusSOuvikBihsNishant";
//create user
router.post('/signup',[
    body('Username').isLength({min:2}),
    body('email').isEmail(),
    body('password').isLength({min:5}),
//validation
],async (req,res)=>{
    try{
      console.log(req.body);
    const errors = validationResult(req);
    console.log(errors);
      //user already exist
    let user = await User.findOne({email:req.body.email});
    if(user){
      return res.status(400).json({error:"sorry a user with this email already exists"})
    }
    //encryption /hashing
    const salt = await bcrypt.genSalt(10);
    secPass = await bcrypt.hash(req.body.password,salt);
    user = await User.create({
      Username:req.body.Username,
      password:secPass,
      email:req.body.email,
    })
    const data ={
      id:user.id,
    }
    const jwtData = jwt.sign(data,jwt_SECREAT)
    res.json(data);
  }catch(error){
    console.error(error.message);
    res.status(500).send("internal server error")
  }
   
});

router.post('/login',[
  body('Username').isLength({min:5}),
  body('password').isLength({min:5})
],async(req,res)=>{
  //if there are errors
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({"hell":"hell"})
  }
  const {Username,password} = req.body;
  console.log(Username);
  console.log(password);
  try{
    let user = await User.findOne({Username:Username});
    if(!user){
      return res.status(400).json({error:"please try to login with correct credentials"})
    }
    const passwordCompare = bcrypt.compare(password,user.password);
    if(!passwordCompare){
      return res.status(400).json({error:"please try to login with correct credentials"})

    }
    else{
    const data={
      user:{
        id:user.id
      }}
      const jwtData = jwt.sign(data,jwt_SECREAT)
    console.log({data});
    res.json({data});
    }
    
  }catch(errors){
    console.error(errors.message);
    res.status(500).send("internal server error")
  }
 } )

module.exports = router;
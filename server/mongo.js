

// Connect to MongoDB
// getting-started.js
const mongoose = require('mongoose');

connectToMonogo().catch(err => console.log(err));

async function connectToMonogo() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("connected to database");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// const newSchema=new mongoose.Schema({
//     Username:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:false
//     }
// })

// const collection = mongoose.model("credentials",newSchema)

module.exports=connectToMonogo;
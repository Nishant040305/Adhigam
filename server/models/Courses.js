const mongoose = require("mongoose");
const {Schema} = mongoose;

const Users = new Schema({
    Username:{
        type:String,
        required:true
    }

})
const CoursSchema = new Schema(
    {
        Username:{
            type:String,
            required:true
        },
        CourseName:{
            type:String,
            required:true,
        },
        OptedStudent:{
            type:[Users],
            default:[]
        }
    }
)

const Course = mongoose.model('course',CoursSchema);
Course.createIndexes();
module.exports = Course;

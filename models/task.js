import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    name:{
        type : String,
        required: [true, "Must provide name"],
        trim:true,
        maxLength: [20,'Name can not be more than 20 characters'],
    },
    completed:{
        type:Boolean,
        default: false,
    }, 
})

export default mongoose.model('Task',TaskSchema)
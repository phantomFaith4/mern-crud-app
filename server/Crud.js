const mongoose = require('mongoose');

const CrudSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
},{timestamps:true});

module.exports = mongoose.model('Crud',CrudSchema);
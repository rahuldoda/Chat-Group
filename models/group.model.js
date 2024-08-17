const mongosh=require('mongoose');

const groupSchema= new mongosh.Schema({
    created_by:{
        type:String,
        required:true
       
    },
    ids:{
        type:[String],
        required:true
    },
    group_name:{
        type:String,
        required:true
    }
 
})

const Groups= mongosh.model('Groups',groupSchema)

module.exports = Groups
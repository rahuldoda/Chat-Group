const mongosh=require('mongoose');

const userSchema= new mongosh.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String
    },
    email:{
        type:String,
        required:true,        
        unique:true
    },
    
    role_id:{
        type:String,
        required:true     
    }
})

const User= mongosh.model('Users',userSchema)

module.exports = User
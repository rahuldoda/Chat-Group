const mongosh=require('mongoose');

const messageSchema= new mongosh.Schema({
    message_by:{
        type:String,
        required:true       
    },
    message:{
        type:String,
        required:true
    },
    group_id:{
        type:String,
        required:true
    },
    action_by:{
        type:[String],
        required:true
    }
 
})

const Message= mongosh.model('Message',messageSchema)

module.exports = Message
const mongosh=require('mongoose');
const Users=require('./models/user.model')


async function connectMongoDB(){
    return mongosh.connect("mongodb://127.0.0.1:27017/chatDb").then(()=>{
        if(!(Users.find({username:'Riktamtech.com'})))

       { Users.create({
            username    : 'Riktamtech.com',
            password    : '123456',
            first_name  : 'Sunayana Eknath',
            last_name   : '',         
            email       : 'sunayana@riktamtech.com',
            role_id:'1'
           
          });}
          console.log("connected from connection file1")
    }).catch((err)=>console.log(err))

}

module.exports = {
    connectMongoDB
}
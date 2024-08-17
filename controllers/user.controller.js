
const Users= require('../models/user.model')

async function getAllUsers(req,res){  
    const allUsers = await Users.find({});
     return res.json(allUsers);  
}

async function createUsers(req,res){
    
    
      if(req.body.username && req.body.password&&req.body.first_name&&req.body.email){
        var newUser = await Users.create({
          username    : req.body.username,
          password    : req.body.password,
          first_name  : req.body.first_name,
          last_name   : req.body.last_name,         
          email       : req.body.email,
          role_id:'2'
         
        });
        console.log("New User");
      
        return res.status(201).json({msg:'success',id:newUser._id})
      } 

      return res.status(400).json({msg:'enter required field'})
    
  }

  async function editUsers(req,res){  
    
    let params={};
      if(req.query.id){
        if(req.query.last_name){
params.last_name= req.query.last_name
        }
        if(req.query.email){
          params.email= req.query.email
                  }
        var newUser = await Users.updateOne({_id:req.query.id},params);
       
        return res.status(201).json({msg:'success',id:newUser._id})
      } 

      return res.status(400).json({msg:'enter required field'})
    
  }

  async function login(req,res){ 
   
      if(req.body.username && req.body.password){
        var newUser = await Users.find({username:req.body.username,password:req.body.password});
       
        if(newUser.length===1)
       { return res.status(201).json({id:newUser[0]._id,role_id:newUser[0].role_id})}
        
      }

      return res.status(400).json({msg:'enter required field'})
    
  }

  async function searchUsers(req,res){  
   
      if(req.query.first_name){       
        var result = await Users.find({first_name:req.query.first_name}).collation( { locale: 'en', strength: 2 });
        
        return res.status(201).json({msg:'success',result})
      } 

      return res.status(400).json({msg:'enter required field'})
    
  }

module.exports = {
    getAllUsers,createUsers,login,editUsers,searchUsers
}

const Messages= require('../models/message.model')

async function groupMessageById(req,res){
    if(req.query.id){
        const groupMessageById = await Messages.find({group_id:req.query.id});
        return res.json(groupMessageById);
    }

    return res.status(400).json({msg:'enter required field'})
  
}

async function createGroupMessage(req,res){
    
    
      if(req.query.message_by &&req.query.group_id&&req.query.message){
        var newUserGroup = await Messages.create({
            message_by    : req.query.message_by,
            group_id    : req.query.group_id,
            message:req.query.message
          
         
        });
        console.log("New Group Message");
        // newUser.save(function(){
        //   res.redirect('/login?msg=Account Created!');
        // })
        return res.status(201).json({msg:'success',id:newUserGroup._id})
      } 

      return res.status(400).json({msg:'enter required field'})
    
  }

   async function actionOnMessage(req,res){
   
      if(req.query.action_by&&req.query.message_id){             
        var editGroupMessage = await Messages.updateOne({_id:req.query.message_id},{'$push':{action_by:req.query.action_by}});
        
        return res.status(201).json({msg:'success',id:editGroupMessage._id})
      } 

      return res.status(400).json({msg:'enter required field'})
    
  }


 

module.exports = {
    createGroupMessage,actionOnMessage,groupMessageById
}
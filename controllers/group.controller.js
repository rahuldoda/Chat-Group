const Groups= require('../models/group.model')

async function getAllGroups(req,res){

    const allGroups = await Groups.find({});
     return res.json(allGroups);
  
}

async function createGroup(req,res){
    
    
      if(req.query.created_by && req.query.ids.length>=1&&req.query.group_name){
        var newUserGroup = await Groups.create({
          created_by    : req.query.created_by,
          ids    : req.query.ids,
          group_name:req.query.group_name
          
         
        });
        
        // newUser.save(function(){
        //   res.redirect('/login?msg=Account Created!');
        // })
        return res.status(201).json({msg:'success',id:newUserGroup._id})
      } 

      return res.status(400).json({msg:'enter required field'})
    
  }

  async function editGroup(req,res){  
    
    let params={ids:[]};
      if(req.query.id){
        if(req.query.group_name){
params.group_name= req.query.group_name
        }
        if(req.query.ids&&req.query.ids.length>=1){
           
         req.query.ids.forEach(element => {
         
            params.ids.push(element)
          });
                  }

                
        var editGroup = await Groups.updateOne({_id:req.query.id},{'$push':params});
     
       
        return res.status(201).json({msg:'success',id:editGroup._id})
      } 

      return res.status(400).json({msg:'enter required field'})
    
  }
  async function deleteGroup(req,res){
    
    
      if(req.query.id){
        var deleteUserGroup = await Groups.deleteOne({
        _id:req.query.id       
         
        });
       
        
        return res.status(201).json({msg:'group deleted successfully'})
      } 

      return res.status(400).json({msg:'enter required field'})
    
  }

 

module.exports = {
    getAllGroups,createGroup,editGroup,deleteGroup
}
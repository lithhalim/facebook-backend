const Update_role_model=require("../../model/reguster_model/Update-role-model")
const reguster_model=require("../../model/reguster_model/reguster_model")
module.exports=(io)=>{
    io.on("connection",(socket)=>{

        //delete the role from role table after accept or reject
        socket.on("DeleteUpdateRole",async(data)=>{
          const thedeleted=await Update_role_model.destroy({where:{regusterid:data.regusterid}})
        })

        //update user data after admin press accept
        socket.on("updateuserdata",async(data)=>{
          const update_role=await reguster_model.update(data,{where:{regusterid:data.regusterid}})
        })

        socket.on("updateRole",async(data)=>{
            const createRole=await Update_role_model.create(data)
        })
      
      
      })
      

}

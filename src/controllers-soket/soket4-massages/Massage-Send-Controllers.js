const massage_model=require("../../model/massage-section/massage-model")
module.exports=(socket,io)=>{
  socket.on("private-massage-room",(data)=>{
    socket.join(data.regusterid)
  })

  socket.on("privet-massage",async(data)=>{
      const massages=await massage_model.create(data)
      socket.to(data.myfrindid).emit("accept-privet-massage",massages)
    })

    //send all user but not accepter if the accepter here
    socket.on("stateofchat",(data)=>{
      socket.broadcast.emit("statusofmassage",{regusterid:data.regusterid})
    })

}
const allfrind_model=require("../../../model/frrind-section/allfrind-model")

module.exports=async(req,res)=>{
    const addallfrind=await  allfrind_model.create(req.body.data)
    res.json("add")

}
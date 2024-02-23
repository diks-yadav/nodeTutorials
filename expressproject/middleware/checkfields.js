async function checkfield(req,res,next){
    console.log("req.body: ", req.body);
      const {username,password} = req.body;
      if(username&&password){
        next();
      }else {
        res.send({ message: "All fields required", status: 0 });
      }
}

module.exports=checkfield;
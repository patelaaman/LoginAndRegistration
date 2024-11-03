const stuModel = require("../Model/stuModel");

const Registration =async(req,res)=>{
       const {rollno,name,email,password} = req.body;
       const studata = await stuModel.create({
         rollno:rollno,
         name:name,
         email:email,
         password:password
       })
       res.send("Successfully Registered")
}

const Login=async(req, res)=>{
    const {email, password} = req.body;
    const empdata= await stuModel.find({email:email});
      if (empdata.length<1)
      {
        res.status(401).send("Invalid Email!")
      }
      else
      {
        if (empdata[0].password!=password)
        {
            res.status(401).send("Invalid Credentials!");
        }
        else
        {
            res.status(200).send(empdata);
        }
      }
}

module.exports = {
    Registration,
    Login
}
const jwt= require('jsonwebtoken');
const {comparePassword, hashPassword}= require("../helpers/auth")
const {User}= require("../models/user")
const test=(req,res)=>{
    res.json("test is working")
}
const registerUser=async (req,res)=>{
   try {
    const{name,email,password}=req.body;
    if(!name){
        return res.json({
            error:'name is required'
        })
    };
    if(!password || password.length<6){
        return res.json({
            error: "Password is required and should be atleast 6 characters long"
        })
    }

     const exist= await User.findOne({email});
     if(exist)
     {
        return res.json({
            error:"Email is already in Use"
        })
     }
     const hashedPassword= await hashPassword(password)
     const user= await User.create({
        name,email,password:hashedPassword,
     })
      return res.json(user)
   } catch (error) {
    console.log(error);
   }
}

const loginUser=async (req,res)=>{
   try {
    const {email,password}=req.body;
    
    const user = await User.findOne({email});
    if(!user)
    {
        return res.json({
            error: "No User Found"
        })
    }

    const match=  await comparePassword(password,user.password);
     if(!match)
     {
         res.json({error:"password do not match"})
     }

    else
    {
       jwt.sign({email:user.email, id: user._id ,name:user.name},process.env.JWT_SECRET,{},(err,token)=>{
        if(err) throw err;
        res.cookie('token',token).json(user)
       })
    }
    
   } catch (error) {
      console.log(error)
   }
}
const getProfile=(req,res)=>{
    const {token}=req.cookies
    if(token){
      jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
          if(err) 
          {
            res.json(null)
          }
          res.json(user)
      })
  
    }
    else{
      res.json(null)
    }
  }


  const Cases= async (req, res) => {
    const {userId} = req.body;;

   
  
    try {
      const user = await User.findById(userId).populate('cases'); // Populate cases using Mongoose
  
      if (!user) {
        return res.status(404).json({ message:"user not found "});
     }  
  
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }



  const addCases= async(req,res)=>{
    const{userId,title,description}=req.body;

    const user = await User.findById({userId});
    if(user)
    {
       res.status()
    }

  }

  
  


module.exports={
    test,
    registerUser,
    loginUser,getProfile,Cases,addCases
}
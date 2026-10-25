const express = require("express")
const bcrypt=require("bcrypt")
const User = require("../models/User")

const router = express.Router()

router.post("/register",async (req,res) => {
    try{
      const {name,email,password} = req.body

      if (!name || !email || !password){
        return res.status(400).json({
            message:"please fillin filds"
        })
      }

      if (password.length < 6){
        return res.status(400).json({
            message:"Password must be at least 6 character"
      })
      }

      const cx = await User.findOne({
        email:email.toLowerCase().trim()
      })

      if (cx){
        return res.status(400).json({
            message:"Email already registered"
        })
      }

      const hashedpassword = await bcrypt.hash(password,10)

      const user = await User.create({
        name,
        email:email.toLowerCase().trim(),
        password:hashedpassword
      })

      return res.status(201).json({
        message:"Registration Successfull",
        user:{
            id:user._id,
            name:user.name,
            email:user.email
        }
      })
    }
    catch(error) {
     console.log("Registration error",error)

     return res.status(500).json({
        message:"Server errro during registration"
     })
    }
})

router.post("/login",async (req,res) => {
  try{
    const {email,password} = req.body;

    if (!email || !password){
      return res.status(400).json({
        message:"Please Enter mail and password"
      })
    }
    const user = await User.findOne({
      email:email.toLowerCase().trim()
    })
    if (!user){
      return res.status(404).json({
        message:"User not Found,please register first"
      })
    }

   const isMatch = await bcrypt.compare(password,user.password);

   if (!isMatch){
    return res.status(401).json({
      message:"Incorrect mail or password"
    })
   }

   return res.status(200).json({
    message:"Login Successfully",
    user:{
      id:user._id,
      name:user.name,
      email:user.email
    }
   })
  }
  catch (error) {
    console.log("Login error:",error)

    return res.status(500).json({
      message:"Server error during login"
    })
  }
})


module.exports = router
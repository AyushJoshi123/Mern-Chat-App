import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export const signup = async (req,res) => {

  try{
    
console.log(req.body);

  const {name,email,password} = req.body;

  if(!name || !email || !password){
    return res.status(400).json({
      message:"All fields are required"
    });
    }

    const userExists = await User.findOne({email});

    if(userExists){
      return res.status(400).json({
        message:"User already exists"
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = await User.create({
      name,
      email,
      password:hashedPassword
    });

    res.status(201).json({
      message:"User created successfully",
      user:{
        id:newUser._id,
        name:newUser.name,
        email:newUser.email
      }
    });

  }catch(error){
    res.status(500).json({
      message:error.message
    });
  }

};



// SIGNIN
export const signin = async (req,res) => {

  try{

    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(!user){
      return res.status(400).json({
        message:"Invalid credentials"
      });
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
      return res.status(400).json({
        message:"Invalid credentials"
      });
    }

    const token = jwt.sign(
      {id:user._id},
      process.env.JWT_SECRET,
      {expiresIn:"7d"}
    );

    res.status(200).json({
      message:"Login successful",
      token,
      user:{
        id:user._id,
        name:user.name,
        email:user.email
      }
    });

  }catch(error){
    res.status(500).json({
      message:error.message
    });
  }

};



// LOGOUT
export const logout = async (req,res) => {

  try{

    res.status(200).json({
      message:"Logout successful"
    });

  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};
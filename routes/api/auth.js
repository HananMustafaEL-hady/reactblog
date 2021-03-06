const express=require('express');
const router =express.Router();
const auth =require('../../middleware/auth');
const   User=require('../../models/User');
const {check ,validationResult } = require('express-validator');
const gravatar=require('gravatar');
const bcrypt=require('bcryptjs');
const  jwt=require('jsonwebtoken');
const config=require('config');
// get api/auth

router.get('/',auth, async (req,res)=>{



    try{

const user=await User.findById(req.user.id).select('-password');


res.json(user);
    }catch(err){


console.error(err.message);
res.status(500).send("server error");

    }
});

//api/auth

router.post('/',[

    check('email',"please Enter valid emil").isEmail(),
    check('password',"password is required").exists()
    
    
    ], 
    async (req,res)=>{
       // console.log(req.body);
       const errors=validationResult(req);
    
    if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
         
    }
    
    const { email,  password }=req.body;
    
    try{
     // see if user exists
    
        let user =await User.findOne({email });
        if(!user){
           return res.status(400).json({errors:[{msg:'invalid email or password'}]});
        }
    
  
    

    const isMatch=await bcrypt.compare(password,user.password);

    if (!isMatch){
        return res.status(400).json({errors:[{msg:'invalid email or password'}]});

    }
    //return jasonwebtoken
    const payload={
        user:{
            id: user.id
        }
    };
    
    jwt.sign(payload,
        config.get('jwtSecret')
        // ,{    expiresIn:360000 }
        ,
        (err,token)=>{
            if(err) throw err;
            res.json({token});
    
        }
        
        
        );
    
    
    
    
    } 
    catch(err){
    console.log(err.message);
    res.status(500).send('server error');
    
    }
    
    
    
    }
    
    )
    
    

module.exports=router;
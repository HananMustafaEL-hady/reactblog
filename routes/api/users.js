const express=require('express');
const router =express.Router();
const {check ,validationResult } = require('express-validator');
const gravatar=require('gravatar');
const User =require('../../models/User');
const bcrypt=require('bcryptjs');
const  jwt=require('jsonwebtoken');
const config=require('config');
const auth =require('../../middleware/auth');


// get api/users



router.get('/',(req,res)=>res.send('user router'));

router.post('/',[

check('name',"Name is required").not().isEmpty(),
check('email',"please include a valid emil").isEmail(),
check('password',"please enter a password with 6 or more characters")
.isLength({

    min:6
})


], 
async (req,res)=>{
   // console.log(req.body);
   const errors=validationResult(req);

if(!errors.isEmpty()){
return res.status(400).json({errors:errors.array()});
     
}

const {name , email,  password }=req.body;

try{
 // see if user exists

    let user =await User.findOne({email });
    if(user){
       return res.status(400).json({errors:[{msg:'User already exists'}]});
    }

//get users gravatar 

const avatar=gravatar.url(email,{
    s:'200',
    r:'pg',
    d:'mm'
})


user=new User({
    name,
    email,
    avatar,
    password
})

//Encrypt password 


const salt=await bcrypt.genSalt(10);

user.password=await bcrypt.hash(password,salt);


await user.save();


//return jasonwebtoken
const payload={
    user:{
        id: user.id
    }
}

jwt.sign(payload,
    config.get('jwtSecret')
    ,{    expiresIn:360000 }
    ,
    (err,token)=>{
        if(err) throw err;
        res.json({token});

    }
    
    
    );


// res.send("user registered");


} 
catch(err){
console.log(err.message);
res.status(500).send('server error');

}



}

)



router.get('/userlogin',auth, async(req,res)=>{
    try{ 
        const user=await User.findOne({_id: req.user.id})
    
    
        if(!user){
            return res.status(400).json({msg:'Not found the user'});
        }
    
        res.json(user);
    
    }catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
    }
    
    });
    

//get any user by id

router.get('/userbyId/:id', async(req,res)=>{


    try {
    
        const user=await User.findOne({_id:req.params.id})

        if(!user) return res.status(400).json({msg:'Not found the user '});
        res.json(user);
    } catch (err) {
    
        console.error(err.message);
        if(err.kind=='ObjectId'){
            return res.status(400).json({msg:'User not found '});
        }
        res.status(500).send('server Error');
    
    }
    
    })




// patch email


router.patch('/email', auth,async(req, res) => {

    try {
        const {email }= req.body;
        console.log(email);

       
        const user = await User.findOneAndUpdate({ _id:  req.user.id},{email:email})
      console.log(user);
      res.status(200).json(user);

    } catch (err) {
        res.status(400).json({ success: false })
    }

}
)



//patch Name




router.patch('/name', auth,async(req, res) => {

    try {
        const {name }= req.body;
        console.log(name);

       
        const user = await User.findOneAndUpdate({ _id:  req.user.id},{name:name})
      console.log(user);
      res.status(200).json(user);

    } catch (err) {
        res.status(400).json({ success: false })
    }

})




router.patch('/password', auth,async(req, res) => {
    

    try {
        const {password }= req.body;
        // const salt=await bcrypt.genSalt(10);

        // password=await bcrypt.hash(password,salt);
        // console.log(password);
        const hash = await bcrypt.hash(password, 7);
        console.log(hash)

       
        const user = await User.findOneAndUpdate({ _id:  req.user.id},{password:hash})
      console.log(user);
      res.status(200).json(user);

    } catch (err) {
        res.status(400).send(err)
    }

})




module.exports=router;
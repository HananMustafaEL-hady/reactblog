const express=require('express');
const router =express.Router();
const Profile=require('../../models/Profile');
const User =require('../../models/User');
const auth =require('../../middleware/auth');
const Post=require('../../models/Post');
const {check ,validationResult } = require('express-validator');

// get api/profile


// router.get('/',(req,res)=>res.send('profile router'));


//Get current user profile api/profile/ user
//access private

router.get('/user',auth, async(req,res)=>{
try{ 
    const profile=await Profile.findOne({user: req.user.id}).populate(
        'user',
    ['name',
    
    'avatar','image']
    
    );


    if(!profile){
        // return res.status(400).json({msg:'There is not Profile for this user'});
        profile = await Profile.create({ user: req.user.id});
        profile = await Profile.findOne({ user: req.user.id }).populate("user", [
          "name",
          "email",
          'avatar','image'

        ]);
    }

    res.json(profile);

}catch(err){
console.error(err.message);
res.status(500).send('Server Error');
}

});

//route Post api/profile
// create or update user profile
//access private

router.post('/',[
    auth,
//     [

//     check('status','Status is required').not().isEmpty(),
//     check('skills','Skills is required').not().isEmpty()



// ]

],

async (req,res) =>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

const {City,status,skills,bio,youtube,twitter,facebook,linkedin,instagram,age}=req.body;

//Build profile object

const profileFields={};
profileFields.user=req.user.id;

if(status) profileFields.status=status;
if(bio) profileFields.bio=bio;
if(age) profileFields.age=age;
if(City) profileFields.City=City;
if(skills){
    profileFields.skills=skills.split(',').map(skill=>skill.trim());
}

console.log(profileFields.skills);

profileFields.social={}

if(youtube) profileFields.social.youtube=youtube;
if(twitter) profileFields.social.twitter=twitter;
if(instagram) profileFields.social.instagram=instagram;
if(facebook) profileFields.social.facebook=facebook;
if(linkedin) profileFields.social.linkedin=linkedin;






try{

    let profile = await Profile.findOne({user:req.user.id});

    if(profile){
        //Update
        profile=await Profile.findOneAndUpdate(
            {user:req.user.id },
        {$set: profileFields},
        { new:true }
        );

        return res.json(profile)
    }
// create

profile=new Profile(profileFields);

await profile.save();

return res.json(profile)


}catch(err){

    console.error(err.message);
    res.status(500).send('Server Error');

}



});


// get/profile 
// get all profiles 
// public 

router.get('/', async(req,res)=>{


try {

    const profiles=await Profile.find().populate('user',['name','avatar','image'])
    res.json(profiles);
} catch (err) {
    
    console.error(err.message);
    res.status(500).send('server Error');

}

});


// get/profile /user/:user_id
// get all profile by user ID
// public 

router.get('/user/:user_id', async(req,res)=>{


    try {
    
        const profile=await Profile.findOne({user:req.params.user_id}).populate('user',['name','avatar','image'])

        if(!profile) return res.status(400).json({msg:'there is no profile for this user '});
        res.json(profile);
    } catch (err) {
    
        console.error(err.message);
        if(err.kind=='ObjectId'){
            return res.status(400).json({msg:'Profile not found '});
        }
        res.status(500).send('server Error');
    
    }
    
    })






// delete app/api/profile
// Delete Profile , user & posts
//  private
router.delete('/',auth, async(req,res)=>{

    try{ 
        //  remove user posts



        await Post.deleteMany({user:req.user.id});



        //Remove profile
await Profile.findOneAndRemove({user: req.user.id});
    
    //Remove  user 
await User.findOneAndRemove({_id:req.user.id});




        // if(!profile){
        //     return res.status(400).json({msg:'There is not Profile for this user'});
        // }
    
        res.json({msg:"User deleted"});
    
    }catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
    }
    
    });
    



// post api/profile/experience
// add Profile experience
//  private

router.post('/experience',[auth,

check('title','Title is required').not().isEmpty(),
check('company','company is required').not().isEmpty(),
check('from','from is required').not().isEmpty(),




],async(req,res)=>{

const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
}



const {title,company,location,from ,to,current,description}=req.body;






const newexp={
    title,company,
    location,from 
    ,to,current,
    description
}


try {
    

const profile=await Profile.findOne({

    user:req.user.id
})


profile.experience.unshift(newexp);
await profile.save();
res.json(profile)

} catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
}


}

);


// delete api/profile/experience/:exp_id
// delete Profile experience 
//  private




router.delete('/experience/:exp_id',auth, async(req,res)=>{

try {

    const profile=await Profile.findOne({user:req.user.id})

    
    //get remove index

const removeIndex=profile.experience.map(item=>item.id).indexOf(req.params.exp_id);


profile.experience.splice(removeIndex,1);





await profile.save();

res.json(profile);


} catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
}


});



/*********************************** */

// post api/profile/education
// add Profile education
//  private

router.post('/education',[auth,

    check('faculty','faculty is required').not().isEmpty(),
    check('degree','degree is required').not().isEmpty(),
    check('fieldofstudy','field of study is required').not().isEmpty(),

    check('from','from is required').not().isEmpty(),
    
    
    
    
    ],async(req,res)=>{
    
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    
    
    
    const {faculty,degree,fieldofstudy,from ,to,current,description}=req.body;
    
    
    
    
    
    
    const newedu={
        faculty,degree,
        fieldofstudy,from 
        ,to,current,
        description
    }
    
    
    try {
        
    
    const profile=await Profile.findOne({
    
        user:req.user.id
    })
    
    
    profile.education.unshift(newedu);
    await profile.save();
    res.json(profile)
    
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
    
    }
    
    );
    
    
    // delete api/profile/education/:edu_id
    // delete Profile experience 
    //  private
    
    
    
    
router.delete('/education/:edu_id',auth, async(req,res)=>{
    
    try {
    
        const profile=await Profile.findOne({user:req.user.id})
    
        
        //get remove index
    
    const removeIndex=profile.education.map(item=>item.id).indexOf(req.params.edu_id);
    
    
    profile.education.splice(removeIndex,1);
    
    
    
    
    
    await profile.save();
    
    res.json(profile);
    
    
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
    
    });
    
    
    
    

module.exports=router;
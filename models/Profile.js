const mongoose =require('mongoose');

const ProfileSchema=new mongoose.Schema({


    email:{

    },
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
},
City:{ 

    type:String,
   
},
status:{
    type:String ,
},
education:[
    {
        faculty:{
            type:String ,
    required:true 
        },
        degree:{
            type:String,
            required:true 

        },

 fieldofstudy:{
    type:String,
    required:true
        },
        from:{
            type:Date,
            required:true 
        },
        to:{
            type:Date,

        },
        current:{
            type:Boolean,
            default:false
        },

        description:{
            type:String
        }

    }
],
skills:{
    type:[String],
    // required:true 

},
bio:{
    type:String ,

},
experience:[
    {
        title:{
            type:String ,
    required:true 
        },
        company:{
            type:String ,
            required:true 
        },
        location:{
            type:String
        },
        from:{
            type:Date,
            required:true 
        },
        to:{
            type:Date,

        },
        current:{
            type:Boolean,
            default:false
        },

        description:{
            type:String
        }

    }
],

social:{

    youtube:{
        type:String
    },
    twitter:{
        type:String
    },
    facebook:{
        type:String
    },
    linkedin:{
        type:String
    },
    instagram:{
        type:String
    }
},
date:{
    type:Date,
    default:Date.now
},
age:{
    type:Number
}
});



module.exports=Profile=mongoose.model('profile',ProfileSchema);
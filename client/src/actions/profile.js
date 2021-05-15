import axios from  'axios';



import{
profile_fail,
get_profile,
update_profile,
profile_clear,
delete_account,
get_profiles

} from './type'

//GET current user profile


export const get_current_profile=()=>async dispatch=>{

try {

    const res=await axios.get('/api/profile/user');


    dispatch({
        type:get_profile,
        payload:res.data
    });

    
} catch (err) {


    dispatch({
        type:profile_fail,
        payload:{msg:err}

        // payload:{msg:err.response.statusText,status:err.response.status}
    });
    
}
   
}







export const  createprofile=(formData,history,edit=false)=>async dispatch=>{

try {

    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }


const res=await axios.post('/api/profile',formData,config);

dispatch({

    type:get_profile,
    payload:res.data
})
    

// dispatch(setAlert(edit?'profile update':'profile created','success'));

if(!edit){

    history.push('/dashboard');
}


}

catch (err) {
    const errors=err.response.data.errors;
    if(errors){
        errors.forEach(error => 

            console.log(error)
            // dispatch(setAlert(error.msg,'danger'))
            
            );
    }
    
    dispatch({
        type:profile_fail,
        payload:{msg:err.response.statusText,status:err.response.status}
    });
    
}


}




//add experience

export const addExperience=(formData,history)=>async dispatch=>{



    try {

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
    
    
    const res=await axios.post('/api/profile/experience',formData,config);
    
    dispatch({
    
        type:get_profile,
        payload:res.data
    });
        
    
    // dispatch(setAlert('Experience Added','success'));
    
    
        history.push('/dashboard');
    
    
    
    }
    
    catch (err) {
        // const errors=err.response.data.errors;
        // if(errors){
        //     errors.forEach(error => 
    
        //         console.log(error)
        //         // dispatch(setAlert(error.msg,'danger'))
                
        //         );
        // }
        console.log(err);
        
        dispatch({
            type:profile_fail,
          //  payload:{msg:err.response.statusText,status:err.response.status}
          payload:{msg:err}

        });
        
    }
    




}






//add Education

export const addEducation=(formData,history)=>async dispatch=>{



    try {

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
    
    
    const res=await axios.post('/api/profile/Education',formData,config);
    
    dispatch({
    
        type:get_profile,
        payload:res.data
    });
        
    
    // dispatch(setAlert('Education Added','success'));
    
    
        history.push('/dashboard');
    
    
    
    }
    
    catch (err) {
        const errors=err.response.data.errors;
        if(errors){
            errors.forEach(error => 
    
                console.log(error)
                // dispatch(setAlert(error.msg,'danger'))
                
                );
        }
        
        dispatch({
            type:profile_fail,
            payload:{msg:err.response.statusText,status:err.response.status}
        });
        
    }
    




}



//Delete Experience

export const deleteEXp=id=>async dispatch=>{

try {

    const res=await axios.delete(`/api/profile/experience/${id}`)
    
  dispatch({

    type:update_profile,
    payload:res.data
  });


} catch (err) {
    

    dispatch({
        type:profile_fail,
        payload:{msg:err.response}
    }); 
}

}






//Delete Education

export const deleteEdu=id=>async dispatch=>{

    try {
    
        const res=await axios.delete(`/api/profile/education/${id}`)
        
      dispatch({
    
        type:update_profile,
        payload:res.data
      });
    
    
    } catch (err) {
        
    
        dispatch({
            type:profile_fail,
            payload:{msg:err.response}
        }); 
    }
    
    }









    //Delete account and profile

export const deleteaccount=()=>async dispatch=>{


    if(window.confirm('Are your Sure ? ')){
        try {
    
            const res=await axios.delete('/api/profile')
            
          dispatch({
        
            type:profile_clear,
          });
        
          dispatch({
        
            type:delete_account
            ,
          });
        
        
        } catch (err) {
            
        
            dispatch({
                type:profile_fail,
                payload:{msg:err.response}
            }); 
        }
        
    }

 
    }
    


//Get all profiles


export const get_all_profiles=()=>async dispatch=>{


    dispatch({
        type:profile_clear,
    });  //clear 


    try {
    
        const res=await axios.get('/api/profile');
    
    
        dispatch({
            type:get_profiles,
            payload:res.data
        });
    
        
    } catch (err) {
    
    
        dispatch({
            type:profile_fail,
            payload:{msg:err}
    
            // payload:{msg:err.response.statusText,status:err.response.status}
        });
        
    }
       
    }



    
//Get all profile by id


export const get_profile_id=userid=>async dispatch=>{


  

    try {
    
        const res=await axios.get(`/api/profile/user/${userid}`);
    
    
               dispatch({
            type:get_profile,
            payload:res.data
        });
    
        
    } catch (err) {
    
    
        dispatch({
            type:profile_fail,
            payload:{msg:err}
    
            // payload:{msg:err.response.statusText,status:err.response.status}
        });
        
    }
       
    }





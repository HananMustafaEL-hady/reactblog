import axios from  'axios';
import{Register_success,Register_fail,userloaded,
    auth_error,Login_fail,
    LOGOUT,
    Login_success,
    profile_clear} from './type';
 
    import {setAlert} from './alert';

import {get_current_profile} from './profile';

import SetToken from '../helper/authToken';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    Stack,
    AlertDescription,
  } from "@chakra-ui/react"


//register


export const register =({name,email,password,city,age})=> async dispatch=>{

const config={
    headers:{
        "Content-Type" :"application/json"
    }
}

const body=JSON.stringify({name,email,password,city,age});

try {

    const res=await axios.post('/api/users',body,config);


    dispatch({
        type:Register_success,
        payload: res.data

    });
    dispatch(loadUser());
    dispatch(get_current_profile());


} catch (err) {

    const errors=err.response.data.errors;
    if(errors){

        errors.forEach(err=> {
          
            // console.log(err.msg);
            dispatch(setAlert(err.msg,'error'));

            // alert(err.msg);

      
        }
        
        );
    }
    dispatch({
        type:Register_fail,

    });

    
}
}



//export load user

export const loadUser=()=>async dispatch =>{

if(localStorage.token){

    SetToken(localStorage.token);
}

try {
    
    const res= await axios.get('/api/auth');

    dispatch({
        type:userloaded,
        payload:res.data

    })

    // dispatch(loadUser());

} catch (err) {

    dispatch({
        type:auth_error
    });
    
}

}



//Login

export const login =(email,password)=> async dispatch=>{

    const config={
        headers:{
           "Content-Type" :"application/json"

        }
    }
    
    const body=JSON.stringify({email,password});
    
    try {
    
        const res=await axios.post('/api/auth',body,config);
    
    
        dispatch({
            type:Login_success,
            payload: res.data
    
        });
        dispatch(loadUser());

    }
    
    
    catch (err) {
    
        const errors=err.response.data.errors;
        if(errors){
    
            errors.forEach(err=> {
              
                // console.log(err.msg);
                dispatch(setAlert(err.msg,'error'));

                // alert(err.msg);

          
            }
            
            );
        }

        console.error(err)
        dispatch({
            type:Login_fail,
    
        });
    
        
    }
    }
    
    
//Logout 
 


export const logout=()=>dispatch=>{
    dispatch({type:profile_clear});

       dispatch({type:LOGOUT} );
}

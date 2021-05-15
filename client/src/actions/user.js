import axios from  'axios';
import {get_user,user_fail,uploadimg} from './type';






export const Get_user_id=userid=>async dispatch=>{



    try {
    
        const res=await axios.get(`/api/users/userbyId/${userid}`);
    
    
               dispatch({
            type:get_user,
            payload:res.data
        });
    
        
    } catch (err) {
    
    
        dispatch({
            type:user_fail,
            payload:{msg:err}
    
        });
        
    }
       
    }





    export const Get_current_User=()=>async dispatch=>{

        try {
        
            const res=await axios.get('/api/users/userlogin');
        
        
            dispatch({
                type:get_user,
                payload:res.data
            });
        
            
        } catch (err) {
        
        
            dispatch({
                type:user_fail,
                payload:{msg:err}
        
                // payload:{msg:err.response.statusText,status:err.response.status}
            });
            
        }
           
        }
        


export const Upload_img=(userid,img_upload)=>async dispatch=>{

    console.log(img_upload);
//     var img='';

// // let    img = img_upload.target.files[0];
// // console.log(img);

if(img_upload){
    let img = img_upload.target.files[0];
    console.log(img);
   
      
     const formData = new FormData();
     formData.append('image', img);
     console.log(formData);

    try {
    
        const res=await axios.post(`/api/upload/user/${userid}`,formData);
    
    
               dispatch({
            type:uploadimg,
            payload:res.data
        });
    
        
    } catch (err) {
    
    
        dispatch({
            type:user_fail,
            payload:{msg:err}
    
        });
        
    }
       

}

}
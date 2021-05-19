import axios from 'axios';
import {Link } from "react-router-dom";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/react"

// import { setAlert} from './alert';

import {
    Get_Post,
    Post_Error,
    Update_like,
    Add_post,
    Delete_Post,
getsinglepost ,
AddComment,
RemoveComment ,
uploadimgpost,  
profile_clear
} from './type';


//get posts

export const GetPosts=()=>async dispatch=>{

    try {

        const res=await axios.get('/api/posts');

        dispatch({
            type:Get_Post,
            payload:res.data
        });




        dispatch({type:profile_clear})
        
    } catch (err) {


        dispatch({

            type:Post_Error,
            payload:{msg:err.response.statusText,status:err.response.status}
        });
        
    }
};





//Add like 

export const Add_Like=id=>async dispatch=>{

    try {

        const res=await axios.post(`/api/posts/like/${id}`);

        dispatch({
            type:Update_like,
            payload:{id,likes:res.data}
        });




        
    } catch (err) {


        dispatch({

            type:Post_Error,
            payload:{msg:err}
        });
        
    }};





    //remove like 

export const Remove_Like=id=>async dispatch=>{

    try {

        const res=await axios.post(`/api/posts/unlike/${id}`);

        dispatch({
            type:Update_like,
            payload:{id,likes:res.data}
        });




        
    } catch (err) {


        dispatch({

            type:Post_Error,
            payload:{msg:err}
        });
        
    }};





    

    //delete post 

export const DeletePost=id=>async dispatch=>{

    try {

        const res=await axios.delete(`/api/posts/${id}`);

        dispatch({
            type:Delete_Post,
            payload:id
        });



//alert
        
    } catch (err) {


        dispatch({

            type:Post_Error,
            payload:{msg:err}
        });
        
    }};





//Add post



 export const AddPost=(text,img_upload)=>async dispatch=>{
    const formData = new FormData();

    if(img_upload){

    let img = img_upload.target.files[0];
    console.log(img);
   
      
     formData.append('image', img);
     console.log(formData);

    }
    // text=  JSON.stringify(text);
    console.log(text);
formData.append('text',text);
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }

    try {

        const res=await axios.post('/api/posts/',formData ,config);

        dispatch({
            type:Add_post,
            payload:res.data
        });



//alert
        
    } catch (err) {


        dispatch({

            type:Post_Error,
            
            payload:{msg:err}
        },       

        );



        
    }};








//get  single post

export const Get_Single_Post=id=>async dispatch=>{

    console.log(id)

    try {

        const res=await axios.get(`/api/posts/${id}`);

        dispatch({
            type:getsinglepost,
            payload:res.data
        });




        
    } catch (err) {


        dispatch({

            type:Post_Error,
            payload:{msg:err.response.statusText,status:err.response.status}
        });
        
    }
};






//Add Comment



export const Add_Comment=(postID,formData)=>async dispatch=>{

    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }

    try {

        const res=await axios.post(`/api/posts/comment/${postID}`,formData,config);

        dispatch({
            type:AddComment,
            payload:res.data
        });



//alert
        
    } catch (err) {


        dispatch({

            type:Post_Error,
            
            payload:{msg:err}
        },       

        );



        
    }};








//delete Comment



export const Delete_Comment=(postID,CommentID)=>async dispatch=>{

    // const config={
    //     headers:{
    //         'Content-Type':'application/json'
    //     }
    // }

    try {

        const res=await axios.delete(`/api/posts/comment/${postID}/${CommentID}`);

        dispatch({
            type:RemoveComment,
            payload:CommentID
        });



//alert
// dispatch(SetAlert('Comment Removed'));
        
    } catch (err) {


        dispatch({

            type:Post_Error,
            
            payload:{msg:err}
        },       

        );



        
    }};






    export const Upload_img_post=(postId,img_upload)=>async dispatch=>{

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
        
            const res=await axios.post(`/api/upload/Post/${postId}`,formData);
        
        
                   dispatch({
                type:uploadimgpost,
                payload:res.data
            });
        
            
        } catch (err) {
        
        
            dispatch({
                type:Post_Error,
                payload:{msg:err}
        
            });
            
        }
           
    
    }
    
    }





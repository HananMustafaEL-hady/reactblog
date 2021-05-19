import { defaults } from 'request';
import {

    Get_Post,
    Post_Error,
    Update_like,
    Delete_Post,
    Add_post,
    getsinglepost,
    RemoveComment,
    AddComment
}
from '../actions/type';




const initialState={

    posts:[],
    post:null,
    loading:true,
    error:{}
}


export default function (state=initialState,action){

const {type,payload} =action;


switch (type){


    case Get_Post:
        return {
        ...state,
        posts:payload,
        loading:false
    }



    case Post_Error:
        return {
            ...state,
            error:payload,
            loading:false
        };


    case Update_like:
        return{
            ...state,
            posts:state.posts.map(post=>post._id===
                payload.id? {...post,likes:payload.likes}:post),

            loading:false

        }

    case Delete_Post:
        return{

            ...state,

            posts:state.posts.filter(post=>post._id!==payload),

            loading :false

        }

        case Add_post :
            return{
                ...state,
                posts:[payload,...state.posts],
                loading:false

        }


        case getsinglepost :
            return{

                ...state,
                post:payload,
                loading:false

            }



        case AddComment: 
        return{

            ...state,
            post:{...state.post,comments:payload},
            loading:false

        }
        

        case RemoveComment: 
        return{

            ...state,
            post:{
                ...state.post,
                comments:state.post.comments.filter(comment=>comment._id!==payload)

            },
            loading:false

        }


    
default :
return state;

}

}
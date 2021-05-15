import {get_user,user_fail,uploadimg} from '../actions/type';



const initialState={


    user:null,
    users:[],
    loading:true,

    error:{}

}








export  default function (state=initialState,action){


    const{type,payload}=action;



    switch(type){
 

        case get_user:


        return {
            ...state,
            user:payload,
            loading:false
        }

           

        case user_fail:

        return{
            ...state,
            error:payload,
            loading:false

        };
     case   uploadimg:
        return {
            ...state,
            user:payload,
            loading:false
        }



    


  
        default:
            return state;
    }
}

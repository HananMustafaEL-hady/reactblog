import { get_profile,profile_fail,
    profile_clear,update_profile,
     get_profiles } from "../actions/type";

const initialState={


    profile:null,
    profiles:[],
    loading:true,

    error:{}

}


export  default function (state=initialState,action){


    const{type,payload}=action;



    switch(type){
 

        case get_profile:
        case update_profile:


        return {
            ...state,
            profile:payload,
            loading:false
        }

           

        case profile_fail:

        return{
            ...state,
            error:payload,
            loading:false

        };


    case profile_clear:
        return{
            ...state,
            profile:null,
            
            loading :false
        }

        case get_profiles:

        return{

...state,
profiles:payload,
loading:false
        }

  

        default:
            return state;
    }
}
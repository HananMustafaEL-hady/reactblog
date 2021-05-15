import{Register_success,Register_fail
     ,auth_error,userloaded,Login_success,
     
     Login_fail
      ,LOGOUT,delete_account
    } from '../actions/type';

const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    loading:true,
    user:null
}


export default function (state=initialState, action)
{

    const {type,payload}=action;
        switch(type){

            case Register_success:
            case Login_success:
                localStorage.setItem('token',payload.token);
                return{...state,...payload,
                    isAuthenticated:true,
                    loading:false
                }

                case Register_fail:
                case auth_error:
                case Login_fail:
                 case LOGOUT :
                case delete_account:
                 
                    localStorage.removeItem('token');
                    return {
                        ...state,
                        token:null,
                        isAuthenticated:false,
                        loading:true
                    }
                    case userloaded:
                        return {
                            ...state,
                            isAuthenticated:true,
                            loading:false,
                            user:payload
                        }

             
                    default:
                         return state;

        }

}
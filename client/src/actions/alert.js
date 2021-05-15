import {Set_alert, Remove_alert} from './type';
import uuid from 'uuid';
export const setAlert=(mes,alertType)=>dispatch=>{


    const id=uuid.v4();

    dispatch({
        type:Set_alert,
        payload:{mes,alertType,id}
    })
    
}
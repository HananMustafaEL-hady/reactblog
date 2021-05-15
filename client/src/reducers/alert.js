
import {Remove_alert,Set_alert}  from '../actions/type'

const initialState=[];



export default function (state=initialState,action){

const {type,payload}=action;
    switch(type){

case 'Set_alert':
    return [...state,payload];

case 'Remove_alter':
 return state.filter(alert=>alert.id!==payload)

 default: return state;
}

}
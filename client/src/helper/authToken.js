import axios from 'axios';

const SetToken=token=>{

if(token){

    axios.defaults.headers.common['x-auth-token']=token;
}
else{
    //if not token =>delete it from the global headers


    delete axios.defaults.headers.common['x-auth-token'];

}
}

export default SetToken;
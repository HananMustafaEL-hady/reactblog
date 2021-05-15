import React ,{Fragment, useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {Get_user_id} from '../../actions/user';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
const UserItem = ({ Get_user_id,user}) => {

    let Params=useParams();
    console.log(Params.id);

    useEffect(()=>{
        console.log(Params.id);

        Get_user_id(Params.id);
    },[Get_user_id]);// added as dependency



    return   user.loading && user._id==null?<Spinner/>:
    <Fragment>




<p className="lead">
    <i className="fas da-user"></i>

    

     <div className="profile-top bg-primary p-2">
        
       {user.user.image ? ( <img
       class="round-img my-1"
       src={`http://localhost:5000/api/upload/show/${user.user.image}`}
       alt=""
     />):( <img
      class="round-img my-1"
      src={user.user.avatar}
      alt=""
    />)}
  
  
                               



     <h1 class="large">{user.user.name}</h1>

     <h1 >{user.user.email}</h1>

   
     </div>
  
    
</p>




     </Fragment>;



}
 UserItem.propTypes = {
   Get_user_id:PropTypes.func.isRequired,


}

const mapStateToProps=state=>({


    user: state.user

}
);
export default 
connect(mapStateToProps,{Get_user_id})  (UserItem);

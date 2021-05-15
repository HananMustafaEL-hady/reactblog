import React ,{Fragment, useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {Link}  from "react-router-dom";
import {Get_current_User,Upload_img} from '../../actions/user';
const UserAuth = ({  Get_current_User,Upload_img,auth:{user}  ,user:{_id,loading},profile }) => {

const [img_upload,Setimg_upload]=useState('');
    useEffect(()=>{

        Get_current_User();
    },[Get_current_User]);// added as dependency



    return loading && _id==null?<Spinner/>:
    <Fragment>



<h1 className="large text-primary">

Edit</h1>

<p className="lead">
    <i className="fas da-user"></i>

    

     <div className="profile-top bg-primary p-2">
        
       {user.image ? ( <img
       class="round-img my-1"
       src={`http://localhost:5000/api/upload/show/${user.image}`}
       alt=""
     />):( <img
      class="round-img my-1"
      src={user.avatar}
      alt=""
    />)}
    
       <form class="form my-1"   onSubmit={e=>{
          
          e.preventDefault();
          
          Upload_img(user._id,img_upload)       

         

        }
      
      
      }
>

      <input class="choose-file" type="file" name="image "  onChange ={e=>Setimg_upload(e)}  />

      <button   class="upload btn btn-primary" type="submit" >Upload</button>
        
        
        

        </form>
                               



     <h1 class="large">{user.name}</h1>

     <h1 >{user.email}</h1>

   
     </div>
  
    
</p>


{profile.profile!==null &&(
  // profile.user._id==user._id 
  // &&(
      <Link  className="btn" to={`/profile/${user._id}`}>myprofile</Link>
    

  //)
)}

    </Fragment>;



}

UserAuth.propTypes = {
    Get_current_User:PropTypes.func.isRequired,
    Upload_img:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    user:PropTypes.object.isRequired,


}

const mapStateToProps=state=>({


    auth:state.auth,
    user: state.user,
    profile:state.profile

}
);
export default  connect(mapStateToProps,{Get_current_User,Upload_img}) (UserAuth);

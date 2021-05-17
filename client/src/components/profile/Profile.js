import React ,{Fragment,useEffect,useState}from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileAbout from './ProfileAbout'
import Profiledisplay from './Profiledisplay';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from'./PrfofileEducation';
import {Upload_img} from '../../actions/user';

import {get_all_profiles, get_profile_id} from '../../actions/profile';
import UserItem from '../user/UserItem';
import { Redirect } from "react-router-dom";


const Profile = ({get_profile_id,profile:{profile,loading},Upload_img,auth,match}) => {

    const [img_upload,Setimg_upload]=useState('');

    useEffect(
        async() => {
    await    get_profile_id(match.params.id);
       console.log(match.params.id)
    }, [get_profile_id]);
    return <Fragment>

        

        { 
        profile===null?
        // profile===null||!loading|| match.params.id!==profile.user._id?
        
        // <Spinner/>
        // <UserItem  id={match.params.id}/>

        // <Redirect to={`/UserItem/${match.params.id}`}/>
        <Spinner/>

    

        
        
        
        :<Fragment>
            
            <Link to='/posts' className='btn btn-light'>
            Back
            </Link>
            {auth.isAuthenticated&&auth.loading==false&&auth.user._id==profile.user._id&&(

                <Link to='/edit-profile' className='btn btn-dark'>
<i class="fas fa-edit"></i>                </Link>
            )}

<div class="profile-grid my-1">

{auth.isAuthenticated&&auth.loading==false&&auth.user._id==profile.user._id&&(

<Fragment>  <form class="form my-1"   onSubmit={e=>{
          
          e.preventDefault();
          
          Upload_img(auth.user._id,img_upload)       

         

        }
      
      
      }
>

      <input class="choose-file" type="file" name="image "  onChange ={e=>Setimg_upload(e)}  />

      <button   class="upload btn btn-primary" type="submit" >Upload</button>
        
        
        

        </form>
                               



</Fragment>
)}



    <Profiledisplay profile= {profile} />

    {auth.isAuthenticated&&auth.loading==false&&auth.user._id==profile.user._id&&(
        <Fragment>
                <Link to="Edit-Email" class="btn btn-light">
            <i class="fas fa-graduation-cap text-primary">
                </i> <i class="fas fa-edit"></i> Email</Link>
        </Fragment>



                            )}


    <ProfileAbout  profile= {profile} />

   
{profile.experience.length>0&& <div className="Profile-exp bg-white p-2">

<h2 className="text-primary">
    Experience
</h2>
{profile.experience.map(experience=>(
    <ProfileExperience key={experience._id} 
    experience={experience}/>
))}


</div>


}




{profile.education.length>0&& <div className="Profile-exp bg-white p-2">

<h2 className="text-primary">
    Education
</h2>
{profile.education.map(education=>(
    <ProfileEducation key={education._id} 
    education={education}/>
))}


</div>


}

    
</div>
            </Fragment>
            
            
            
            
            
            
            }
    </Fragment>
}

Profile.propTypes = {

    get_profile_id:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired,

}

const mapStateToProps =state=>({
    profile:state.profile,

    auth :state.auth

})

export default connect(mapStateToProps,{get_profile_id,Upload_img}) (Profile)

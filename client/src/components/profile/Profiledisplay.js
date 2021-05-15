import React from 'react'
import PropTypes from 'prop-types'

const profiledisplay = ({profile:{
    City,
    status,
    age,
    social,
    user:{
        name, avatar,image
    }
}}) => {
    return (
        <div class="profile-top bg-primary p-2">
        
       
        <img
          class="round-img my-1"
          src={`http://localhost:5000/api/upload/show/${image}`}
          alt=""
        />

        <h1 class="large">{name}</h1>
        <p class="lead">{status}</p>
        <p class="lead">{City}</p>
        <p class="lead">{age}</p>


        <p>social Network</p>
        <div class="icons my-1">


        
        {social && social.twitter &&(
 <a href={social.twitter}>
 <i class="fab fa-twitter fa-2x"></i>
</a>
        )}


{social && social.facebook &&(
 <a href={social.facebook}>
            <i class="fab fa-facebook fa-2x"></i>
</a>
        )}


{social && social.linkedin &&(
 <a href={social.linkedin}>
            <i class="fab fa-linkedin fa-2x"></i>
</a>
        )}
        {social && social.instagram &&(
 <a href={social.instagram}>
            <i class="fab fa-instagram fa-2x"></i>
</a>
        )}



      
          
          
        </div>
      </div>
    )
}

profiledisplay.propTypes = {

profile:PropTypes.object.isRequired,

}

export default profiledisplay

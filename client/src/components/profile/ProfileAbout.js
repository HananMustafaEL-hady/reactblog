import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({
    profile :{
        bio,
        City,
        status,
        age,
        social,
        skills

    }
})=> {
    return (
        <div class="profile-about bg-light p-2">
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
            
            {bio&&(
                <Fragment>
                    <p>About Me</p>
 <p>
            {bio}
          </p>
                </Fragment>
            )}
         
          <h2 class="text-primary">Skill </h2>
          <div class="skills">
          {skills.map((skill,index)=>(
              <div key={index} className="p-1">

                  <i className="fas fa-check">
                      {skill}
                  </i>


              </div>
          ))}
          </div>
        </div>
    )
}

ProfileAbout.propTypes = {

}

export default ProfileAbout

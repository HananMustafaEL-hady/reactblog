import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({
    profile :{
        bio,
        skills

    }
})=> {
    return (
        <div class="profile-about bg-light p-2">
            
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

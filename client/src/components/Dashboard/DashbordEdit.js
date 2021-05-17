import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'

 const DashbordEdit = () => {
    return (
        <Fragment>
<div class="dash-buttons">
        <Link to="edit-profile" class="btn btn-light"
          ><i class="fas fa-user-circle text-primary"></i> 
          Edit Profile</Link >


        <Link to="addExperiences" class="btn btn-light"
          ><i class="fab fa-black-tie text-primary"></i>
           Add Experience </Link >



        <Link to="addeduction" class="btn btn-light">
            <i class="fas fa-graduation-cap text-primary">
                </i> Add Education</Link>




                <Link to="Edit-Email" class="btn btn-light">
            <i class="fas fa-graduation-cap text-primary">
                </i> Edit Email</Link>


      </div>

        </Fragment>
    )
}


export default DashbordEdit;
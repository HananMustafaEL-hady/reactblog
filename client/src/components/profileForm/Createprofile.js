import React,{Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link , withRouter} from 'react-router-dom';

import{createprofile} from '../../actions/profile';

const Createprofile = ({createprofile,history}) => {

    const [formData,SetData]=useState({
        City:'',
        status:'',
        skills:'',
        bio:'',
        youtube:'',
        twitter:'',
        facebook:'',
        linkedin:'',
        instagram:'',
        age:'',
    });

const {
    City,
    status,
    skills,
    bio,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
    age,


}=formData;
const onSubmit= async e=>{

  e.preventDefault();

  createprofile(formData,history);
}
const onChange=e=>SetData({...formData,[e.target.name]:e.target.value})
const [socialinputs,toggleSocail]=useState(false);
    return (
       <Fragment>

<h1 class="large text-primary">
        Create Your Profile
      </h1>
      <p class="lead">
        <i className="fas fa-user">
            </i> Let's get some information to make your
        profile stand out
      </p>
      <form className="form" onSubmit={e=>onSubmit(e)} >
        <div className="form-group">
          <select name="status" value={status} onChange={e=>onChange(e)}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text"
            >Give us an idea of where you are at in your career</small >
        </div>
        <div className="form-group">
          <input type="text" placeholder="City" name="City" 
          value={City}
          onChange={e=>onChange(e)}
          
          />
          
        </div>
        <div className="form-group">
          <input type="number"
           placeholder="age" name="age" 
           value={age}
           onChange={e=>onChange(e)}
           
           />
         
        </div>
     
        <div class="form-group">
          <input type="text" placeholder="* Skills" 
          
          name="skills"
          
          value={skills}
          onChange={e=>onChange(e)}/>
          <small class="form-text"
            >Please use comma separated values (eg.HTML,CSS,JavaScript,PHP)</small >
        </div>
      
        <div class="form-group">
          <textarea placeholder="A 
          short bio of yourself" name="bio"
          value={bio}
          onChange={e=>onChange(e)}
          
          ></textarea>
          <small class="form-text" >
              Tell us a little about yourself</small>
        </div>



        <div class="my-2">
          <button  onClick={()=>toggleSocail(!socialinputs)} type="button" class="btn btn-light">
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>


        {socialinputs &&<Fragment>

            <div class="form-group social-input">
          <i class="fab fa-twitter fa-2x"></i>
          <input type="text" placeholder="Twitter URL" 
          name="twitter" 
          value={twitter}
          onChange={e=>onChange(e)}/>
        </div>

        <div class="form-group social-input">
          <i class="fab fa-facebook fa-2x"></i>
          <input type="text" placeholder="Facebook URL" 
          
          name="facebook"
          
          value={facebook}
          onChange={e=>onChange(e)}/>
        </div>


        <div class="form-group social-input">
          <i class="fab fa-linkedin fa-2x"></i>
          <input type="text" placeholder="Linkedin 
          URL" name="linkedin"
          
          value={linkedin}
          onChange={e=>onChange(e)}/>
        </div>

        <div class="form-group social-input">
          <i class="fab fa-instagram fa-2x"></i>
          <input type="text" placeholder="Instagram URL" 
          
          name="instagram" 
          
          value={instagram}
          onChange={e=>onChange(e)}/>
        </div>
            </Fragment>}

 
        <input type="submit" class="btn btn-primary my-1" />
        <a class="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
       </Fragment>
    )
}

Createprofile.propTypes = {
createprofile:PropTypes.func.isRequired,
}


export default connect(null,{createprofile}) (withRouter( Createprofile))//withRouter to allow us to pass the history object and use it from the action

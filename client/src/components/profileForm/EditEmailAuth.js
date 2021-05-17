import React,{Fragment, useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link , withRouter} from 'react-router-dom';
import{editemail,get_current_profile} from '../../actions/profile';


const EditEmailAuth = ({profile:{profile,loading},editemail,get_current_profile,history}) => {


    const [formData,SetData]=useState({
        email:'',
    });
    const { email}=formData;
    const onChange=e=>SetData({...formData,[e.target.name]:e.target.value});
    const onSubmit= async e=>{

        e.preventDefault();
      
        editemail(formData,history,true);
      }


      useEffect(() => {
        get_current_profile();
        SetData({ email:loading || !profile.user.email? '' :profile.user.email,  })
         
        }, [loading], get_current_profile)
                

    return (
        <Fragment>
    
      
              <p class="lead">
                <i className="fas fa-user">
                    </i>  Edit Your Email
              </p>
              <form className="form" onSubmit={e=>onSubmit(e)} >
              
                <div className="form-group">
                  <input type="email"
                   placeholder="email" name="email" 
                   value={email}
                   onChange={e=>onChange(e)} />
                 
                </div>      
                <input type="submit" class="btn btn-primary my-1" />
                <Link class="btn btn-light  my-1" to="/dashboard">Go Back</Link>
              </form>
               </Fragment>
            )
}

EditEmailAuth.propTypes = {

}

const mapStateToProps=state=>({

    profile:state.profile
    })
      
export default  connect(mapStateToProps,{editemail,get_current_profile}) (withRouter(EditEmailAuth));

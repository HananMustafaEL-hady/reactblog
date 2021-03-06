  import React ,{useState ,Fragment}from 'react'
//import axios from 'axios';
import {register } from '../../actions/auth'
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {setAlert} from '../../actions/alert';

export const Register = ({register,isAuthenticated,setAlert}) => {

const[formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    password2:''

});
const{name,email,password,password2}=formData;

 const onChange=e=>setFormData( {...formData,[e.target.name]:e.target.value });



const onSubmit= async e=>{
     e.preventDefault();
    if(password!==password2){

console.log('passwords do not match');
setAlert('passwords do not match','error');

    }
    else{


        console.log(formData);
 register({name,email,password,password2});
        // const newuser={
        //     name,
        //     email,
        //     password

        // }
        // try {

        //     const config ={
        //         headers:{
        //             'Content-Type':'application/json'
        //         }
        //     }
            
        //     const body=JSON.stringify(newuser);

        //     const res=await axios.post('/api/users',
        //     body,config);
        //     console.log(res.data);
        // } catch (err) {


        //     console.error(err.response.data);
        // }
    }
    
}


if(isAuthenticated){

return <Redirect to="/dashboard"/>

}
    return (
        <Fragment>
          {/* <div className ="row">
            <div class="col-6">
f
            </div>

            <div className="col-6">
f

            </div>




          </div> */}
        <h1 class="large text-primary ">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form main"  onSubmit={e=>onSubmit(e)} >
          <div className="form-group">
            <input type="text"
             placeholder="Name"
              name="name"
              value={name}
              onChange={e=>onChange(e)}
              required

               />
          </div>
          <div className="form-group">
            <input type="email"
             placeholder="Email Address"
             name="email"
              value={email}
              onChange={e=>onChange(e)}
              required

         
            
            />
            {/* <small className="form-text"
              >This site uses Gravatar so if you want a profile image, use a
              Gravatar email</small
            > */}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e=>onChange(e)}
              required

            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={e=>onChange(e)}
              required

            />
          </div>
          <input type="submit" class="btn btn-primary" value="Register" />
          <div  className="path2">
  
  </div>
        </form>
        
        <p className="my-1">
          Already have an account? <Link  className="btn btn-Warning "    to="/login">Sign In</Link>
        </p>

      </Fragment>
    )
};

Register.prototype={
    register:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool
 
}



const mapStateProps=state=>({

  isAuthenticated: state.auth.isAuthenticated

});
export default connect(mapStateProps,{ setAlert,register}) (Register);
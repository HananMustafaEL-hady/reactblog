import React ,{useState ,Fragment}from 'react'
import {Link, Redirect} from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {login} from '../../actions/auth';
import {setAlert} from '../../actions/alert';


export const Login = ({login,isAuthenticated ,setAlert}) => 

{

const[formData,setFormData]=useState({
    email:'',
    password:'',

});
const{email,password}=formData;

 const onChange=e=>setFormData( {...formData,[e.target.name]:e.target.value });



const onSubmit= async e=>{
     e.preventDefault();

    //  console.log(formData);
// console.log(email);
     login(email,password);    
    
};
//
if(isAuthenticated){

  return<Redirect to ='/dashboard'/>
}

    return (
        <Fragment>
        {/* <h1 class="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user">
            </i> sing  into  Your Account</p>
        <form className="form"  onSubmit={e=>onSubmit(e)} >
      
          <div className="form-group">
            <input type="email"
             placeholder="Email Address"
             name="email"
              value={email}
              onChange={e=>onChange(e)}
            
            />
         
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e=>onChange(e)}
                
            />
          </div>
        
          <input type="submit" class="btn btn-primary" value="login" />
        </form>
        <p className="my-1">
          Don't have an account?<Link  className="btn btn-Warning "    to="/register">Sign Up</Link>
        </p> */}

<h1 class="large text-primary">Login</h1>
        <p className="lead">
          <i className="fas fa-user">
            </i> sing  into  Your Account</p>
        <form className="form"  onSubmit={e=>onSubmit(e)} >

<div class="main">

  
  <div className="form-group">
            <input type="email"
             placeholder="Email Address"
             name="email"
              value={email}
              onChange={e=>onChange(e)}
              required
            

            />
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
        
          <input type="submit" class="btn btn-primary" value="login" />
  
  <div class="path" className="path"/>
    {/* <h1 class="title-path">Welcome Back.</h1> */}
  
  </div>
  </form>

  <p className="my-1">
          Don't have an account?<Link  className="btn btn-Warning "    to="/register">Sign Up</Link>
        </p>

      </Fragment>
    )
}

login.PropTypes={

  login:PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool

}

const mapStateProps=state=>({

  isAuthenticated: state.auth.isAuthenticated

});
export default  connect(mapStateProps, { login  , setAlert}) (Login);
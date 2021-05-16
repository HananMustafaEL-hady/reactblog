import React from 'react'
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
export const Landing = ({isAuthenticated}) => {

  if(isAuthenticated){
    return <Redirect to ='/dashboard'/>
  }


    return (
        <div>
               <section className="landing">
      <div >
        <div className="landing-inner">
          <h1 className="x-large" >welcome to our website </h1>
          
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}


Landing.propTypes

={

  isAuthenticated:PropTypes.bool
}
const mapStateToprops=state=>({


  isAuthenticated:state.auth.isAuthenticated
});
export default  connect(mapStateToprops) (Landing);
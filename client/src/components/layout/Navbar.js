import React,{ Fragment } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {logout} from "../../actions/auth"

export const Navbar = ({ auth: { isAuthenticated, loading, user},logout}) => {

const authLinks=(
  <ul>
    <li>
    <Link to ="/dashboard">
<i className="fas fa-user"/>{' '}

<span className="hide-sm">

Dashboard

</span>

    </Link>
    </li>

    {/* <li>
 <Link to="/profiles">
    profiles</Link>
      
 </li> */}


 <li>
   {user &&
   <Fragment>

 <Link to={`/Profileauth/${user._id}`}>
 <i class="far fa-user"></i></Link>
      

</Fragment>

   
   }
    </li>

      <li>

      <Link  onClick={logout} to={'/login'} >

<i className="fas fa-sign-out-alt">

  {' '}
  <span className="hide-sm">Logout

  </span>
</i>



      </Link>
      
      </li> 
    
</ul>
);

const  guestLinks=(

  <ul>
 {/* <li>
 <Link to="/profiles">
    profiles</Link>
      
 </li> */}
<li>
<Link to="/">
       Blog</Link>
       </li>
  <li>
    <Link to="/register">
    
    <i class="fas fa-user-plus"></i></Link>
    
    </li>
  {/* <li>
    <Link to="/login">
      Login</Link>
      
      </li> */}

</ul>
);

    return (
              <nav className="navbar bg-dark">
    
       
      

       <Link to="/Posts">
       Home</Link>
      
      
   
      
     { (<Fragment>{ isAuthenticated ? authLinks : guestLinks  }</Fragment>)}
    
    </nav>
       
    );
};

Navbar.propTypes={

  logout:   PropTypes.func.isRequired,


  auth:PropTypes.object.isRequired


  
  ///as a prop
}

const mapStateToProps=state=>({
auth:state.auth

 });
export default  connect(mapStateToProps , {logout})(Navbar)  ;
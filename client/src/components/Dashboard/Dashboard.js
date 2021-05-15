import React ,{Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {Link}  from "react-router-dom";
import DashbordEdit from './DashbordEdit';

import Experience from "./Experience";
import Education from "./Education";


import {deleteaccount, get_current_profile} from '../../actions/profile';
const Dashboard = ({  get_current_profile,
    auth:{user},deleteaccount
    
    ,profile:{profile,loading}}) => {


    useEffect(()=>{

        get_current_profile();
    },[get_current_profile]);// added as dependency



    return loading && profile==null?<Spinner/>:
    <Fragment>



<h1 className="large text-primary">

    Dashbord
</h1>

<p className="lead">
    <i className="fas da-user"></i>
    Welcome{user &&user.name}
</p>


{

profile!==null?
<Fragment>

<div className="my-2">
    <button className ="btn btn-danger" onClick={()=>deleteaccount()}>

        <i className="fas fa-user-minus">

            Delete My Account

        </i>

    </button>
</div>

<DashbordEdit/>

<Experience experience={profile.experience} />


<Education education={profile.education} />





</Fragment>:
<Fragment>
<p> you have not profile</p>
    <Link to="/create-profile" className="btn btn-primary my-1">


Create Profile

    </Link>

</Fragment>
    
    
    }


    </Fragment>;



}

Dashboard.propTypes = {
    get_current_profile:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired,
    deleteaccount:PropTypes.func.isRequired,


}

const mapStateToProps=state=>({


    auth:state.auth,
    profile: state.profile

}
);
export default  connect(mapStateToProps,{deleteaccount,get_current_profile}) (Dashboard);

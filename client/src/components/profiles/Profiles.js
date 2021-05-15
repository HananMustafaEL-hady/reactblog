import React,{Fragment,useEffect} from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import {connect} from 'react-redux';
import Profileitem from './Profileitem';
import {get_all_profiles} from '../../actions/profile'

const Profiles = ({get_all_profiles,profile:{profiles,loading}}) => {
  
  
  useEffect(() => {
     get_all_profiles();
  },[get_all_profiles]);
  
    return <Fragment>
{loading? <Spinner/>:<Fragment>
    
    <h1 className="Large text-primary">

        Users
    </h1>
    <p className="lead">

        <i className="fab fa-connectdevelop">
        Connectors CV

        
                </i>
    </p>

    <div className="profiles">
{profiles.length>0?(

    profiles.map(profile=>(
        <Profileitem key={profile._id} profile={profile}/>
    ))

):
<h4> NO profiles found</h4>
}

    </div>
    </Fragment>}

    </Fragment>
}

Profiles.propTypes = {

    get_all_profiles:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired,
}

const mapStateToProps=state=>({

    profile:state.profile
})
export default connect(mapStateToProps,{get_all_profiles})( Profiles)

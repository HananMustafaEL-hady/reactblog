import React from 'react'
import PropTypes from 'prop-types';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/react"
import {connect} from 'react-redux';

const Alertcompoent = ({alerts}) => alerts!==null&&alerts.length>0&&
alerts.map(

alert=>(

    // <div key={alert.id} className={`alert alrt-${alert.alertType}`}>
    //         {alert.msg}

    // </div>
    <Alert status={`${alert.alertType}`}>
    <AlertIcon />
    {alert.msg}
  </Alert>

)

);
Alertcompoent.propTypes = {

}


const mapStateToProps=state=>({

alerts:state.alert

});
export default connect(mapStateToProps)(Alertcompoent);

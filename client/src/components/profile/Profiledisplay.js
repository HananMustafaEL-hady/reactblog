import React ,{Fragment,useEffect} from 'react';
import PropTypes from 'prop-types'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profiledisplay = ({profile:{
   
    user:{
        name, avatar,image
    }
}}) => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
    return (
        <div class="profile-top bg-primary p-2" data-aos="fade-up-right">
       {image ?   <img
          class="round-img my-1"
          src={`/api/upload/show/${image}`}
          alt=""
        />:
        <img
        class="round-img my-1"
        src={avatar}
        alt=""
      />
        }
      


        <h1 class="large" style={{color: "green"}}>{name}</h1>
    
      </div>
    )
}

Profiledisplay.propTypes = {

profile:PropTypes.object.isRequired,

}

export default Profiledisplay

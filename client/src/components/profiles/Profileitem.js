import React ,{Fragment,useEffect} from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';

const Profileitem = ({profile:{
    user:{_id,name,avatar},
    status,
    City,
    age,
    skills

}}) => {

    useEffect(() => {
        AOS.init({
          duration : 100
        });
      }, []);
    return (
        <div className="profile bg-yellow" data-aos="fade-up">
            <img src={avatar} alt="" className="round-img"/>
            <div>
<h2>{name}</h2>
<p>{status}</p>
<p>{City}</p>

<ul>
    {skills.slice(0,4).map((skill,index)=>(

        <li key={index}  className="text-primary">
  
<i className="">
    {skill}
</i>

        </li>
    ))}
</ul>
<Link to={`/Profile/${_id}`} className="btn btn-primary">
More details
    </Link>
         
         </div> 

        </div>
    )
}

Profileitem.propTypes = {

    profile:PropTypes.object.isRequired,


}

export default Profileitem;

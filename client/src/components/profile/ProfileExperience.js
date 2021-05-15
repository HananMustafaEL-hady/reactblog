import React from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';

const ProfileExperience = ({experience:{
    comapny,title,location,to , from ,description 

}

}) => {
    return (
        <div>
            <h3 className="text-dark">{comapny}</h3>
            <p>
                <Moment format ='YYYY/MM/DD'>{from}</Moment>
                -{!to?'Now':<Moment format ='YYYY/MM/DD'>{to}</Moment>
}
            </p>
            <p>
              Job:  {title}
            </p>

{location&&
    <p>
            location:  {location}
            </p>
}
            {description &&
             <p>
             Description:  {description}
             </p>
            }
           


        </div>
    )
}

ProfileExperience.propTypes = {

    experience:PropTypes.array.isRequired,

}

export default ProfileExperience

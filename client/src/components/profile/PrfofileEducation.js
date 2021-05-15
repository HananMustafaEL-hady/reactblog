import React ,{Fragment}from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';

const ProfileEducation = ({education:{
    faculty,degree,fieldofstudy,to , from ,description 

}

}) => {
    return (
        <div>
            <h3 className="text-dark">faculty:{faculty}</h3>
            <p>
            <Fragment>
          From  <Moment format ='YYYY/MM/DD'>{from}</Moment>
            </Fragment>
              
                - {!to ? 'Now':
                <Fragment>
               To  <Moment format ='YYYY/MM/DD'>{to}</Moment>

                </Fragment>
                
}
            </p>
            
    <p>
            Degree:  {degree}
            </p>


            <p>
            Department:  {fieldofstudy}
            </p>

            {description &&
             <p>
             Description:  {description}
             </p>
            }

        </div>
    )
}

ProfileEducation.propTypes = {

    education:PropTypes.array.isRequired,

}

export default ProfileEducation;

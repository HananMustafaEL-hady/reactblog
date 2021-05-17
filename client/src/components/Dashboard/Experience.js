import React , {Fragment} from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect} from 'react-redux';

import {deleteEXp} from '../../actions/profile';

const Experience = ({experience,deleteEXp}) => {

const experiences =experience.map(exp=>(

    exp&&

    <tr key={exp._id}>

<td>{exp.company}</td>
<td className="hide-sm">{exp.title}</td>
<td>

    <Moment format='YYY/MM/DD'>{exp.from}</Moment>-
    
    {
exp.to===null?('Still '):(<Moment format='YYY/MM/DD'>

    {exp.to}


</Moment>) 

    }
</td>

<td>
    <button className="btn btn-danger" onClick={()=>deleteEXp(exp._id)}>

    <i class="fas fa-trash-alt"></i>
    </button>
</td>

    </tr>
))

    return (
       <Fragment>

<h2 className="my-2"> Experience</h2>

<table className="table">

<thead>
    <tr>
    <th className="hide-sm">Company</th>


        <th className="hide-sm">Title</th>
        <th className="hide-sm">Years</th>
        <th></th>


    </tr>
</thead>
<tbody>
    {experiences}
</tbody>

</table>

       </Fragment>
    )



}

Experience.propTypes = {

    experience:PropTypes.array.isRequired,
    deleteEXp:PropTypes.func.isRequired,

}

export default connect(null,{deleteEXp}) (Experience)

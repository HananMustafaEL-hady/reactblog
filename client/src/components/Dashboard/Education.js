import React , {Fragment} from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {deleteEdu} from '../../actions/profile';

const Education = ({education,deleteEdu}) => {


const Educations =education.map(Edu=>(

    <tr key={Edu._id}>

<td>{Edu.faculty}</td>
<td className="hide-sm">{Edu.degree}</td>
<td className="hide-sm">{Edu.fieldofstudy}</td>

<td>

    <Moment format='YYY/MM/DD'>{Edu.from}</Moment>-
    
    {
Edu.to===null?('Still '):(<Moment format='YYY/MM/DD'>

    {Edu.to}


</Moment>) 

    }
</td>

<td>
    <button className="btn btn-danger" onClick={()=>deleteEdu(Edu._id)}>

    <i class="fas fa-trash-alt"></i>
    </button>
</td>

    </tr>
))

    return (
       <Fragment>

<h2 className="my-2"> Education</h2>

<table className="table">

<thead>
    <tr>
    <th className="hide-sm">faculty</th>


        <th className="hide-sm">Degree</th>
        <th className="hide-sm">Department</th>

        <th className="hide-sm">Years</th>
        <th></th>


    </tr>
</thead>
<tbody>
    {Educations}
</tbody>

</table>

       </Fragment>
    )



}

Education.propTypes = {

    experience:PropTypes.array.isRequired,
    deleteEdu:PropTypes.func.isRequired,

}

export default connect(null,{deleteEdu}) (Education);

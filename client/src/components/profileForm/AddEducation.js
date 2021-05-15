import React ,{Fragment, useState}from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addEducation} from '../../actions/profile';
import {Link,withRouter} from 'react-router-dom';


const AddEducation =( {addEducation,history}) => {

    const [formdata,setformdata]=useState({

        faculty:'',
        degree:'',
        fieldofstudy:'',
        from:'',
        to:'',
        current:false,
        description:''
    });

const [DateDisabled,toggleDisabled]=useState(false);






const {faculty,degree,fieldofstudy,from,to, current,description}=formdata;


const onChange=e=>setformdata({...formdata,[e.target.name]:e.target.value})



    return (
        <Fragment>
              <h1 class="large text-primary">
       Add An Your Education
      </h1>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any Faculty
      </p>
      <small>* = required field</small>
      <form class="form" onSubmit={e=>{

          e.preventDefault();
          addEducation(formdata,history);

      }}>
        <div class="form-group">
          <input type="text" placeholder="* faculty"
           name="faculty" 
           
value={faculty}
onChange={e=>onChange(e)}

           required />
        </div>


        <div class="form-group">
          <input type="text" placeholder="* Degree"
           name="degree" required
           value={degree}
onChange={e=>onChange(e)}
           />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Field of study"
           name="fieldofstudy" 
           value={fieldofstudy}
           onChange={e=>onChange(e)}
           />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input type="date"
          
          name="from"
          value={from}
          onChange={e=>onChange(e)}
          />
        </div>
         <div class="form-group">
          <p><input type="checkbox" 
          
          name="current" 
          checked={current}
          value={current}
          onChange={e=>{
              
        setformdata({...formdata,current:!current});

        toggleDisabled(!DateDisabled);
          }
        
        }
          /> {' '}Current Job</p>


        </div>


        <div class="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" 
                     value={to}
                     onChange={e=>onChange(e)}
                     disabled={DateDisabled? 'disabled':''}
                     
                     />



                    
        </div>
        <div class="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={e=>onChange(e)}
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <a class="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
        </Fragment>
    )
}

AddEducation.propTypes = {
    addEducation:PropTypes.func.isRequired
}

export default  connect(null,{addEducation})

(withRouter(AddEducation))

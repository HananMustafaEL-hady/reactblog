import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Add_Comment} from '../../actions/post'
// import { post } from 'request';
import { Link } from 'react-router-dom';

const CommentForm = ({postId,Add_Comment,auth}) => {

    const [text,setText]=useState('');
    return (
        <div class="post-form">
        {/* <div class="post-form-header bg-primary">
        </div> */}
        <form class="form my-1"   onSubmit={e=>{
          
          e.preventDefault();
          
          Add_Comment(postId,{text});
           setText('');


           
        
        }
      }
        >
          <textarea cols="30" rows="5"
           placeholder="Create a post"
           value={text}
           onChange={e=>setText(e.target.value)}
           ></textarea>
                  {auth.loading?  (
                      <Link to ="/login"  type="submit" value="Submit" class="btn btn-dark my-1"> submit</Link> )
:
(          <input type="submit" value="Submit" class="btn btn-dark my-1" />
)
                  }
        </form>
      </div>
   
   
   
   
   
    )
}

CommentForm.propTypes = {
    Add_Comment:PropTypes.func.isRequired,

}


const mapStateToProps=state=>({
  auth:state.auth
  
     });

export default connect(mapStateToProps,{Add_Comment}) (CommentForm)

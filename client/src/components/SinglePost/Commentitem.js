import React ,{Fragment}from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {Delete_Comment} from '../../actions/post';
import Moment from 'react-moment';


const Commentitem = (
    {
        postId,
        comment:{_id,text,image,name,avatar,user,date},
        auth,
        Delete_Comment
    }
) => {
    return (
        <Fragment>

<div className="post bg-white p-1 my-1">

<div>
    <Link to={`/profile/${user}`}>
        {image ?( <img className="round-img"
        src={`http://localhost:5000/api/upload/show/${image}`}
        alt=''
        />):( <img className="round-img"
        src={avatar}
        alt=''
        />)
        }
       
        <h4>{name}</h4>
        </Link> 
</div>



<div>
    <div>
        <p classs='my-1'>
            {text}

        </p>

<p className ='post-date'>

    <Moment format ='YYYY/MM/DD'>{date}</Moment>
</p>


{!auth.loading && user===auth.user._id&&(
<button  onClick={e=>Delete_Comment(postId,_id)} type="button" 
className ="btn btn-danger">
<i className="fas fa-times"></i>

</button>


)}

    </div>
</div>


</div>

  
        </Fragment>
    )
}

Commentitem.propTypes = {

    postId:PropTypes.number.isRequired,
    comment:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired,
    Delete_Comment:PropTypes.func.isRequired,


}

const mapStateToProps=state=>({
    auth:state.auth
    
       });

export default  connect(mapStateToProps,{Delete_Comment})(Commentitem)

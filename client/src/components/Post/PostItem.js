import React ,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import Spinner from '../layout/Spinner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Add_Like,Remove_Like,DeletePost} from '../../actions/post';
import {connect }     from 'react-redux' ; //for like and comment actions
const PostItem = ({Add_Like,Remove_Like,DeletePost,auth,
  post:{_id,text,name,image,avatar,user,likes,comments,imagepost,
    date},ShowActionsa
  
  }) => 
  
  {
    useEffect(() => {
      AOS.init({
        duration : 2000
      });
    }, []);
return _id? 
<div class="leftcolumn " data-aos="fade-left">
<div class="card">
<div className="col-md-6 col-sm-12 ">
  <div className="inner">

{imagepost&&
          <img
          className=" fakeimg"
      
          

          
          src={`http://localhost:5000/api/upload/show/${imagepost.filename}`}
          
          alt=""
        />
          }

      </div>
        <div class="post bg-white my-1 p-1 ">
         
        
        <div>
          <Link to={`/profile/${user}`}>
            {image?( <img
              class="round-img"
              

              
              src={`http://localhost:5000/api/upload/show/${image}`}
              
              alt=""
            />):( <img
              class="round-img"
              

              
              
              src={avatar}
              alt=""
            />)}
           
            <h4>{name}</h4>
          </Link>
        </div>

        <div>
          <p class="my-1">
        {text}
          </p>
         
         
          <p className="post-date"><i class="far fa-calendar"></i><Moment format='YYYY/MM/DD'>{date}</Moment></p>


{ShowActionsa&&<Fragment>

  {!auth.loading &&(
 <button  class="btn btn-primary" onClick={e=>Add_Like(_id)}  >
 <i class="fas fa-thumbs-up"></i> 
 {likes.length>0&&(
 <span>{likes.length}</span>

 )}
 </button>

)
 
  
}
        

             {!auth.loading &&
              <button class="btn" onClick={e=>Remove_Like(_id)} >
              <i class="fas fa-thumbs-down"></i>
            </button>
             }
        {
          _id&&
          <Link to={`/post/${_id}`} class="btn ">
          <i class="far fa-comments"></i> {comments.length>0&&(
           <span className="comment-count">{comments.length}</span>

          )}
          
        </Link>
        }

         
{!auth.loading && user===auth.user._id&&(


    <button  onClick={e=>DeletePost(_id)} className="btn btn-danger">
        <i className="fas fa-times"/>
    </button>
)}


</Fragment>

}

</div>
</div>
        </div>
      </div>
      </div>

    :<Spinner/>
};


PostItem.defaultProps={
  ShowActionsa:true
}

PostItem.propTypes = {
post:PropTypes.object.isRequired,
auth:PropTypes.object.isRequired,
Add_Like:PropTypes.func.isRequired,

Remove_Like:PropTypes.func.isRequired,
DeletePost:PropTypes.func.isRequired,
}


const mapStateToProps=state=>({
auth:state.auth

   });

export default  connect(mapStateToProps,{Add_Like,Remove_Like,DeletePost})(PostItem);

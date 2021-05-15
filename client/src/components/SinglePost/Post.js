import React ,{Fragment,useEffect}from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../Post/PostItem'
import {Get_Single_Post} from '../../actions/post'
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import Commentitem from './Commentitem';

const Post = ({Get_Single_Post,post:{post,loading},match}) => {


useEffect(() => {
   Get_Single_Post(match.params.id);


}, [Get_Single_Post])


    return loading ||post===null?<Spinner/>:<Fragment>
<Link to="/posts" className="btn" >Back</Link>
<PostItem  post={post} showActions={false}/>


<CommentForm postId={post._id} />

<div className="comments">

    {  post.comments&&
    post.comments.map(comment=>(

<Commentitem key={comment._id} comment={comment}
postId={post._id}
 />
    ))} 
</div>
    </Fragment>
}

Post.propTypes = {
    Get_Single_Post:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired,

}
const  mapStateToProps =state=>({

    post:state.post
});

export default connect (mapStateToProps,{Get_Single_Post}) (Post)

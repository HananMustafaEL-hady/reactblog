import React,{Fragment,useEffect} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import{GetPosts} from '../../actions/post';

import Spinner from '../layout/Spinner';

import PostItem from './PostItem';
 import PostForm from './PostForm'
const Posts = ({GetPosts,post:{posts,loading}}) => {

    useEffect(() => {
        GetPosts();


    }, [GetPosts]);


    return loading ||!posts?<Spinner/>: (<Fragment>



<h1 className="large text-primary">
    Posts
</h1>

<p className="lead">

    <i className="fas fa-user">
        Welcom
    </i>

    {/* Post form */}

    <PostForm  />





    <div className="posts">

        {posts.map(post=>(
 
            <PostItem Key={post._id} post={post}/>
        ))}
    </div>



</p>

    </Fragment>);
}

Posts.propTypes = {
    GetPosts:PropTypes.func.isRequired,

    post:PropTypes.object.isRequired,

}

const mapStateToProps=state=>({
 post:state.post
});

export default connect(mapStateToProps,{

    GetPosts

})(Posts);

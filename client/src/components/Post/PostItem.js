import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Spinner from "../layout/Spinner";
import AOS from "aos";
import "aos/dist/aos.css";
import { Add_Like, Remove_Like, DeletePost } from "../../actions/post";
import { connect } from "react-redux"; //for like and comment actions
const PostItem = ({
  Add_Like,
  Remove_Like,
  DeletePost,
  auth,
  post,
  ShowActionsa,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  console.log(post);
  return post !== null ? (
    <div class="leftcolumn  " data-aos="fade-left">
      <div class="card">
        <div className="col-md-6 col-sm-12 ">
          <div className="inner">
            {post.imagepost && (
              <img
                className=" fakeimg"
                src={`http://localhost:4001/api/upload/show/${post.imagepost.filename}`}
                alt=""
              />
            )}
          </div>
          <div class="post bg-white my-1 p-1 ">
            <div>
              <Link to={`/profile/${post.user}`}>
                {post.image ? (
                  <img
                    class="round-img"
                    src={`http://localhost:4001/api/upload/show/${post.image}`}
                    alt=""
                  />
                ) : (
                  <img class="round-img" src={post.avatar} alt="" />
                )}

                <h4>{post.name}</h4>
              </Link>
            </div>

            <div>
              <p class="my-1">{post.text}</p>

              <p className="post-date">
                <i class="far fa-calendar"></i>
                <Moment format="YYYY/MM/DD">{post.date}</Moment>
              </p>

              {ShowActionsa && (
                <Fragment>
                  {!auth.loading && (
                    <button
                      class="btn btn-primary"
                      onClick={(e) => Add_Like(post._id)}
                    >
                      <i class="fas fa-thumbs-up"></i>
                      {post.likes.length > 0 && (
                        <span>{post.likes.length}</span>
                      )}
                    </button>
                  )}

                  {!auth.loading && (
                    <button class="btn" onClick={(e) => Remove_Like(post._id)}>
                      <i class="fas fa-thumbs-down"></i>
                    </button>
                  )}
                  {! post?<Spinner/>: (
                    <Link to={`/post/${post._id}`} class="btn ">
                      <i class="far fa-comments"></i>{" "}
                      {post.comments.length > 0 && (
                        <span className="comment-count">
                          {post.comments.length}
                        </span>
                      )}
                    </Link>
                  )}

                  {!auth.loading && post.user === auth.user._id && post && (
                    <button
                      onClick={(e) => DeletePost(post._id)}
                      className="btn btn-danger"
                    >
                      <i className="fas fa-times" />
                    </button>
                  )}
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : 
    <Spinner />
  ;
};

PostItem.defaultProps = {
  ShowActionsa: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  Add_Like: PropTypes.func.isRequired,

  Remove_Like: PropTypes.func.isRequired,
  DeletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { Add_Like, Remove_Like, DeletePost })(
  PostItem
);

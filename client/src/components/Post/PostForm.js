import React , {Fragment,useEffect,useState} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import{AddPost} from '../../actions/post'
import { Link } from 'react-router-dom';

import { useToast } from "@chakra-ui/react"
const PostForm = ({AddPost,auth}) => {
const [text,setText] =useState('');
const [img_upload,Setimg_upload]=useState('');

const toast = useToast()

    return (
        <div class="post-form">
        {/* <div class="post-form-header bg-primary">
          <h3>Say Something...</h3>
        </div> */}
        <form class="form my-1"   onSubmit={e=>{
          toast({
            title: "Post created.",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top-right",
            
          })
          e.preventDefault();
          
          
            AddPost(text,img_upload);
           setText('');

         

        }
      
      
      }
        
        
        >
                <input class="choose-file" type="file" name="image "  onChange ={e=>Setimg_upload(e)} />

          <textarea cols="30" rows="5"
           placeholder="Create a post"
           value={text}
           onChange={e=>setText(e.target.value)}
           ></textarea>
                  {auth.loading?  (  <Link to ="/login"  type="submit" value="Submit" class="btn btn-dark my-1"> submit</Link> )
:
(          <input type="submit" value="Submit" class="btn btn-dark my-1" />
)
                  }
        </form>
      </div>
    )
}

PostForm.propTypes = {
    AddPost:PropTypes.func.isRequired,
}

const mapStateToProps=state=>({
  auth:state.auth
  
     });

export default connect(mapStateToProps,{AddPost}) (PostForm)

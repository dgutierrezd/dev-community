import React, {useEffect} from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
// Redux
import { connect } from 'react-redux'
import {getPost} from '../../actions/postActions'

import Spinner from '../tools/Spinner';
import CommentForm from './CommentForm';
import CommentsFeed from './CommentsFeed';

const Post = props => {

    useEffect(() => {
        props.getPost(props.match.params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const {post, loading} = props;

    let postContent;
    if(post === null || loading) {
        postContent = <Spinner />
    } else {
        postContent = (
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6">
                        <Link to ='/feed' className="btn btn-light mb-3 float-left">
                            Back to Posts Feed
                        </Link>
                    </div>
                    <div className="col-md-6"></div>
                </div>
                {/* Post Item */}
                <div className="card card-body mb-3">
                    <div className="row">
                        <div className="col-md-2">
                            <a href="profile.html">
                            <img className="rounded-circle d-none d-md-block" src={post.avatar}
                                alt={post.name} />
                            </a>
                            <br />
                            <p className="text-center">{post.name}</p>
                        </div>
                        <div className="col-md-10">
                            <p className="lead text-dark">{post.text}</p>
                        </div>
                    </div>
                </div>
                <CommentForm post={post} />
                <div className="comments">
                    {post.comments ? (
                        <CommentsFeed postId={post._id} comments={post.comments} />
                    ) 
                    : null}
                </div>
            </div>
        )
    }

    return (
        <div className="post">
            <div className="container">
                <div className="row">
                    {postContent}
                </div>
            </div>
        </div>
    );
};

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.posts.post
})

export default connect(mapStateToProps, {getPost})(Post);
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
// Redux
import {connect} from 'react-redux';
import {getPosts} from '../../actions/postActions';

import PostForm from './PostForm';
import Spinner from '../tools/Spinner';
import PostFeed from './PostFeed';

const Posts = props => {

    useEffect(() => {
        props.getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {posts, loading} = props.posts;

    let postContent;
    if(posts === null || loading) {
        postContent = <Spinner />
    } else {
        postContent = <PostFeed posts={posts} />
    }

    return (
        <div className="feed">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <PostForm />
                        {postContent}
                    </div>
                </div>
            </div>
        </div>
    );
};

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts
})

export default connect(mapStateToProps, {getPosts})(Posts);
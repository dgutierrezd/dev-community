import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';


const CommentsFeed = props => {

    const {comments, postId} = props;

    return (
        comments.map(comment => 
            <CommentItem key={comment._id} comment={comment} postId={postId} />
        )
    );
};

CommentsFeed.propTypes = {
    comments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired
}

export default CommentsFeed;
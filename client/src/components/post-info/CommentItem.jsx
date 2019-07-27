import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux'
import {deleteComment} from '../../actions/postActions';

const CommentItem = props => {

    const {comment, auth, postId} = props;

    const deleteClick = (postId, commentId) => {
        props.deleteComment(postId, commentId)
    }

    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-2">
                    <img className="rounded-circle d-none d-md-block" src={comment.avatar} alt={comment.name} />
                    <br />
                    <p className="text-center">{comment.name}</p>
                </div>
                <div className="col-md-10">
                    <p className="lead text-dark">{comment.text}</p>
                </div>
                {comment.user === auth.user.id ? (
                    <button onClick={deleteClick.bind(this, postId, comment._id)} type="button" className="btn btn-danger mr-1" style={{right: '3px', button:'0', position: 'absolute'}}>
                        <i className="fa fa-times"></i>
                    </button>
                ): null}
            </div>
        </div>
    );
};

CommentItem.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps,{deleteComment})(CommentItem);
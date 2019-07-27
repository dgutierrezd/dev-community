import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
// Redux
import { connect } from 'react-redux'
import {deletePost, addLike, removeLike} from '../../actions/postActions';

const PostItem = props => {

    const deleteClick = id => {
        props.deletePost(id);
    }

    const likeClick = id => {
        props.addLike(id);
    }

    const unlikeClick = id => {
        props.removeLike(id);
    }

    const {post, auth} = props;

    const findUserLike = likes => {
        if(likes.filter(like => like.user === auth.user.id).length > 0) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="card card-body mb-3" style={{position: 'relative'}}>
            <div className="row">
                <div className="col-md-2">
                      <img className="rounded-circle d-none d-md-block" src={post.avatar}
                        alt={post.name} />
                    <br />
                    <p className="text-center">{post.name}</p>
                </div>
                <div className="col-md-10">
                    <p className="lead text-dark">{post.text}</p>
                </div>
                <div className="col-md-10">
                    <button onClick={ !findUserLike(post.likes) ? likeClick.bind(this, post._id) : unlikeClick.bind(this, post._id)} 
                        type="button" className="btn btn-light mr-1">
                        <i className={classnames("fa fa-thumbs-up", {
                            'text-success' : findUserLike(post.likes)
                        })}></i>
                        <span className="badge badge-light">{post.likes.length}</span>
                    </button>
                    <Link to={`/posts/${post._id}`} className="btn btn-light mr-1">
                        <i className="fa fa-comment"></i>
                        <span className="badge badge-light">{post.comments.length}</span>
                    </Link>
                </div>
                {post.user === auth.user.id ? (
                    <button onClick={deleteClick.bind(this, post._id)} type="button" className="btn btn-danger mr-1" style={{right: '3px', button:'0', position: 'absolute'}}>
                        <i className="fa fa-times"></i>
                    </button>
                ): null}
            </div>
        </div>
    );
};

PostItem.propTypes = {
    deletePost: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {deletePost, addLike, removeLike})(PostItem);
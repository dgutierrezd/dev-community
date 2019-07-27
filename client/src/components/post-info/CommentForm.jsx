import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';
// Redux
import { connect } from 'react-redux'
import {addComment} from '../../actions/postActions';

const CommentForm = props => {

    const [text, saveText] = useState('')
    const [error, saveErrors] = useState({})

    const {post, auth, errors} = props;

    const createComment = e => {
        e.preventDefault();

        let newComment = {
            text,
            name: auth.user.name,
            avatar: auth.user.avatar,
            user: auth.user
        }

        props.addComment(post._id, newComment);

        saveErrors({})
        document.getElementById('form-comment').reset();
    }

    useEffect(() => {
        saveErrors(errors)
    },[errors])

    return (
        <div className="post-form mb-3">
            <div className="card card-info">
                <div className="card-body">
                    <form onSubmit={createComment} id='form-comment' >
                        <div className="form-group">
                            <textarea className={classnames("form-control form-control-lg", {
                                'is-invalid': error.text
                            })}
                            name="text" placeholder="Comment a Reply" onChange={e => saveText(e.target.value)}></textarea>
                            {error.text && (<div className="invalid-feedback">{error.text}</div>)}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {addComment})(CommentForm);
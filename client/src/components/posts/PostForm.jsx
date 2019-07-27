import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// Redux
import {connect} from 'react-redux';
import {addPost} from '../../actions/postActions';

const PostForm = props => {

    const [text, saveText] = useState('')
    const [error, saveErrors] = useState({})


    const createPost = e => {
        e.preventDefault();

        const {user} = props.auth;

        let newPost = {
            text,
            name: user.name,
            avatar: user.avatar
        };

        props.addPost(newPost)      

        saveErrors({})
        document.getElementById('form-post').reset();
    }

    const {errors} = props;

    useEffect(() => {
        saveErrors(errors)
    },[errors])

    return (
        <div className="post-form mb-3">
            <div className="card card-info">
                <div className="card-body">
                    <form onSubmit={createPost} id='form-post'>
                        <div className="form-group">
                            <textarea className={classnames("form-control", {
                                'is-invalid': error.text
                            })} 
                            name="text" onChange={e => saveText(e.target.value)} placeholder="What's happening?"></textarea>
                            {error.text && (<div className="invalid-feedback">{error.text}</div>)}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {addPost})(PostForm);
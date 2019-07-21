import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Link, withRouter} from 'react-router-dom';
// Redux
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';

const Register = props => {

    const [name, saveName] = useState('');
    const [email, saveEmail] = useState('');
    const [password, savePassword] = useState('');
    const [passwordConfirm, savePasswordConfirm] = useState('');
    const [error, saveErrors] = useState({});

    
    const {auth, history, errors} = props;

	// componentWillReceiveProps - Check errors
	useEffect(() => {
		if(auth.isAuthenticated) {
			history.push('/dashboard');
        }
        
        saveErrors(errors)
	}, [auth, history, errors])

    const registerUser = e => {
        e.preventDefault();

        const newUser = {
            name,
            email,
            password,
            passwordConfirm
        }
        props.registerUser(newUser, props.history);
    }

    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Sign Up</h1>
                    <p className="lead text-center">Create your Dev account</p>
                    <form noValidate className="form-horizontal" method="post" onSubmit={registerUser}>
                        <div className="form-group">
                            <label className="cols-sm-2 control-label">Your Full Name</label>{' '}<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                            <div className="cols-sm-10">
                                <div className="input-group"> 
                                    <input type="text" className={classnames('form-control', {
                                        'is-invalid' : error.name
                                    })} 
                                    name="name" id="name" placeholder="Bruce Wayne" onChange={e => saveName(e.target.value)} />
                                    {error.name && (<div className="invalid-feedback">{error.name}</div>)}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="cols-sm-2 control-label">Your Email</label>{' '}<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                            <div className="cols-sm-10">
                                <div className="input-group">
                                    <input type="email" className={classnames('form-control', {
                                        'is-invalid' : error.email
                                    })} 
                                    name="email" id="email" placeholder="bruce@wayne.com" onChange={e => saveEmail(e.target.value)} />
                                    {error.email && (<div className="invalid-feedback">{error.email}</div>)}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="cols-sm-2 control-label">Password</label>{' '}<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                            <div className="cols-sm-10">
                                <div className="input-group">
                                    <input type="password" className={classnames('form-control', {
                                        'is-invalid' : error.password
                                    })}  
                                    name="password" id="password" placeholder="Enter your Password*" onChange={e => savePassword(e.target.value)} />
                                    {error.password && (<div className="invalid-feedback">{error.password}</div>)}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="cols-sm-2 control-label">Confirm Password</label>{' '} <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                            <div className="cols-sm-10">
                                <div className="input-group">
                                    <input type="password" className={classnames('form-control', {
                                        'is-invalid' : error.passwordConfirm
                                    })}  
                                    name="confirm" id="confirm" placeholder="Confirm your Password*" onChange={e => savePasswordConfirm(e.target.value)} />
                                    {error.passwordConfirm && (<div className="invalid-feedback">{error.passwordConfirm}</div>)}
                                </div>
                            </div>
                        </div>
                        <div className="form-group ">
                            <button type="submit" className="btn btn-primary btn-lg btn-block login-button">Register</button>
                        </div>
                        <div className="login-register">
                            Already have an account? <Link to="/login"> Login</Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {registerUser})(withRouter(Register));
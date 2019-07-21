import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// Redux
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';

import {Link} from 'react-router-dom'
import '../../css/login.css';
import icon from '../../img/dev-community-icon.png';

const Login = props => {

  const [email, saveEmail] = useState('');
  const [password, savePassword] = useState('');
	const [error, saveErrors] = useState({});
	
	const {errors, auth, history} = props;

	// componentWillReceiveProps - Check errors
	useEffect(() => {
		if(auth.isAuthenticated) {
			history.push('/dashboard');
		}

		saveErrors(errors)
	}, [errors, auth, history])

  const signUser = e => {
    e.preventDefault();

    const user = {
        email,
        password
		}
		props.loginUser(user);
	}
  
  return (
    <div className="d-flex justify-content-center">
			<div className="user_card">
				<div className="d-flex justify-content-center">
					<div className="brand_logo_container">
						<img src={icon} className="brand_logo" alt="Logo"/>
					</div>
				</div>
				<div className="d-flex justify-content-center form_container">
					<form onSubmit={signUser}>
						<div className="input-group mb-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fa fa-user fa"></i></span>
							</div>
							<input type="email" name="email" 
								className={classnames("form-control input_user", {
									'is-invalid': error.email
								})} 
								placeholder="Email" onChange={e => saveEmail(e.target.value)}/>
								{error.email && (<div className="invalid-feedback">{error.email}</div>)}
						</div>
						<div className="input-group mb-2">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fa fa-lock fa-lg"></i></span>
							</div>
							<input type="password" name="password" 
								className={classnames("form-control input_pass",{
									'is-invalid': error.password
								})} 
								placeholder="Password" onChange={e => savePassword(e.target.value)}/>
								{error.password && (<div className="invalid-feedback">{error.password}</div>)}
						</div>
            <div className="d-flex justify-content-center mt-3 login_container">
              <button type="submit" name="button" className="btn login_btn">Login</button>
            </div>
					</form>
				</div>
				<div className="mt-4">
					<div className="d-flex justify-content-center links">
						Don't have an account? <Link to="/register" className="ml-2">Sign Up</Link>
					</div>
				</div>
			</div>
		</div>
    )
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(mapStateToProps, {loginUser})(Login);
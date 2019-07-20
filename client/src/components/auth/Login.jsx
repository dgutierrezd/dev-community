import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import '../../css/login.css';
import icon from '../../img/dev-community-icon.png';

const Login = () => {

  const [email, saveEmail] = useState('');
  const [password, savePassword] = useState('');
  const [errors, saveErrors] = useState({});

  const signUser = e => {
    e.preventDefault();

    const user = {
        email,
        password
    }

    console.log(user)
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
							<input type="email" name="email" className="form-control input_user" placeholder="Email" onChange={e => saveEmail(e.target.value)}/>
						</div>
						<div className="input-group mb-2">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fa fa-lock fa-lg"></i></span>
							</div>
							<input type="password" name="" className="form-control input_pass" placeholder="Password" onChange={e => savePassword(e.target.value)}/>
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

export default Login;
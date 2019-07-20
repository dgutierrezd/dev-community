import React, { useState } from 'react'
import {Link} from 'react-router-dom';

const Register = () => {

    const [name, saveName] = useState('');
    const [email, saveEmail] = useState('');
    const [password, savePassword] = useState('');
    const [passwordConfirm, savePasswordConfirm] = useState('');
    const [errors, saveErrors] = useState({});

    const registerUser = e => {
        e.preventDefault();

        const newUser = {
            name,
            email,
            password,
            passwordConfirm
        }

        console.log(newUser)
    }

    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Sign Up</h1>
                    <p className="lead text-center">Create your Dev account</p>
                    <form className="form-horizontal" method="post" onSubmit={registerUser}>
                        <div className="form-group">
                            <label className="cols-sm-2 control-label">Your Name</label>{' '}<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                            <div className="cols-sm-10">
                                <div className="input-group"> 
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Bruce Wayne" onChange={e => saveName(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="cols-sm-2 control-label">Your Email</label>{' '}<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                            <div className="cols-sm-10">
                                <div className="input-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="bruce@wayne.com" onChange={e => saveEmail(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="cols-sm-2 control-label">Password</label>{' '}<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                            <div className="cols-sm-10">
                                <div className="input-group">
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter your Password*" onChange={e => savePassword(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="cols-sm-2 control-label">Confirm Password</label>{' '} <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                            <div className="cols-sm-10">
                                <div className="input-group">
                                    <input type="password" className="form-control" name="confirm" id="confirm" placeholder="Confirm your Password*" onChange={e => savePasswordConfirm(e.target.value)} />
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

export default Register;
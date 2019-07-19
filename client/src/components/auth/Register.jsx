import React, { useState } from 'react'

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
                    <form onSubmit={registerUser}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" name="name" required onChange={e => saveName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" onChange={e => saveEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" name="password" onChange={e => savePassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Confirm Password" name="passwordConfirm" onChange={e => savePasswordConfirm(e.target.value)} />
                        </div>
                        <input type="submit" className="btn btn-primary btn-lg btn-block mt-4" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
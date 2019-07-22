import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
// Redux
import {connect} from 'react-redux';

const Landing = props => {

    const {auth, history} = props;

	// componentWillReceiveProps - Check errors
	useEffect(() => {
		if(auth.isAuthenticated) {
			history.push('/dashboard');
		}
	}, [auth, history])
    
    return (
        <div className="landing">
            <div className="dark-overlay landing-inner text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-3 mb-4">DEV Community</h1>
                            <p className="lead">A social platform to developer of all areas, where you can meet people, share and help. <br/>
                                                Create your Dev profile and join to our community.</p>
                            <hr />
                            <div>
                                <Link to="/register" className="btn btn-lg btn-primary my-2">Sign Up</Link>
                            </div>
                            <Link to="/login" className="btn btn-lg btn-secondary">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Landing);
import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

const NavBar = props => {

    const onLogoutClick = e => {
        e.preventDefault();

        props.logoutUser();
    }

    const { isAuthenticated, user } = props.auth;

    const authLinks = (
        <React.Fragment>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/profiles">
                        {' '}
                        Developers
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to='/' onClick={onLogoutClick.bind(this)}>
                        <img className="rounded-circle" src={user.avatar} alt={user.name} title="Gravatar" style={{ width: '25px', marginRight: '5px' }} />{' '}
                        Log Out
                    </Link>
                </li>
            </ul>
        </React.Fragment>
    );

    const guestLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to='/register'>Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
        </ul>
    )

    var initialRoute = '';

    isAuthenticated ? initialRoute = '#' : initialRoute = '/'

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
            <div className="container">
                <Link className="navbar-brand" to={initialRoute}>DEV.Community</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mobile-nav">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(NavBar);
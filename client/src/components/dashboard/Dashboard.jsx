import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';

import Spinner from '../tools/Spinner';
import ProfileActions from './ProfileActions';
import ExperienceCredentials from '../profile/ExperienceCredentials';
import EducationCredentials from '../profile/EducationCredentials';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteAccount(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
        // Check if logged in user has profile data
        if(Object.keys(profile).length > 0) {
            dashboardContent = (
              <div className="mt-3">
                <h4 className="lead text-muted">Welcome <Link to={`/profile/${profile.handle}`}> {user.name} </Link>- {profile.status}</h4>
                <ProfileActions />
                <ExperienceCredentials experience={profile.experience} />
                <EducationCredentials education={profile.education} />
                <hr className="mx-100" />
                <div style={{marginBottom: '60px'}}>
                  <button onClick={this.onDeleteAccount.bind(this)} className="btn btn-danger">Delete Account</button>
                </div>
              </div>
            )
        } else {
            // User is logged in but hasn't profile
            dashboardContent = (
                <div className="col-md-6 mt-3">
                    <h3 className="lead text-muted">Welcome {user.name} to our community</h3>
                    <h6 className="font-weight-normal">You have to create a profile first.</h6>
                    <Link to='/create/profile' className="btn btn-lg btn-info">
                        Create Profile
                    </Link>
                </div>
            )
        }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
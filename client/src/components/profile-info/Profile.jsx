import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGitHub from './ProfileGitHub';
import Spinner from '../tools/Spinner';
// Redux
import {connect} from 'react-redux';
import {getProfileHandle} from '../../actions/profileActions';

const Profile = props => {

    useEffect(() => {
        props.getProfileHandle(props.match.params.handle)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {profile, loading} = props.profile;
    let profileContent;

    if(profile === null || loading) {
        profileContent = <Spinner />
    } else {
        profileContent = (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to ='/profiles' className="btn btn-light mb-3 float-left">
                            Back to Profiles
                        </Link>
                    </div>
                    <div className="col-md-6"></div>
                </div>
                <ProfileHeader profile={profile} />
                <ProfileAbout profile={profile} />
                <ProfileCreds education={profile.education} experience={profile.experience} />

                {profile.githubUsername ? (<ProfileGitHub username={profile.githubUsername} />) : null}
            </div>
        )
    }

    return (
        <div className="profile">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {profileContent}
                    </div>
                </div>
            </div>            
        </div>
    );
};

Profile.propTypes = {
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, {getProfileHandle})(Profile);
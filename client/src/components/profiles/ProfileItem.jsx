import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import isEmpty from '../../validation/is-empty';

const ProfileItem = props => {

    const {profile} = props;

    return (
        <div className="card card-body mb-3 bg-light border-secondary" style={{position: 'relative'}}>
            <div className="row">
                <div className="col-2">
                    <img className="img-fluid rounded-circle" src={profile.user.avatar} alt={profile.user.name} style={{ width: '120px'}}/>
                </div>  
                <div className="col-lg-6 col-md-4 col-8">
                    <h5 className="card-title">{profile.user.name}</h5>
                    <p className="card-subtitle lead mb-2 text-muted">
                        {profile.status} {isEmpty(profile.company) ? null : (<span>at {profile.company}</span>)}
                    </p>
                    <p className="text-muted">
                        {isEmpty(profile.location) ? null: (<span>{profile.location}</span>)}
                    </p>
                    <Link to={`/profile/${profile.handle}`} className="mt-2 btn btn-outline-info">
                        View Profile
                    </Link>
                </div>
                <div className="col-md-4 d-none d-md-block">
                    <h4>Skills</h4>
                    <ul className="list-group">
                        {profile.skills.slice(0, 4).map( (skill, index) => (
                            <li key={index} className="list-group-item">
                                <i className="fa fa-check"/>{' '}
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileItem;
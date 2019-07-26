import React from 'react';
import isEmpty from '../../validation/is-empty';
// TODO: Prop-Types

const ProfileAbout = props => {

    const {profile} = props;

    const name = profile.user.name.split(' ')

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-light mb-3">
                    <h3 className="text-center text-dark">{name[0]}'s Bio</h3>
                    <p className="lead text-dark">
                        {isEmpty(profile.bio) ? null : (<span>{profile.bio}</span>)}
                    </p>
                    <hr />
                    <h3 className="text-center text-dark">Skills</h3>
                    <div className="row">
                        <div className="d-flex flex-wrap justify-content-center align-items-center">
                            {profile.skills.map( (skill, index) => (
                                <div key={index} className="p-3">
                                    <i className="fa fa-check"></i>{' '} 
                                        {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileAbout;
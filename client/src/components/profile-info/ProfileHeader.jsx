import React from 'react';
import isEmpty from '../../validation/is-empty';
// TODO: Prop-Types

const ProfileHeader = props => {

    const {profile} = props;

    return (
        <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-primary text-white mb-3">
                <div className="row">
                  <div className="col-4 col-md-3 m-auto">
                    <img className="rounded-circle" src={profile.user.avatar} alt="" />
                  </div>
                </div>
                <div className="text-center">
                    <h1 className="display-4 text-center">{profile.user.name}</h1>
                    <p className="text-white lead text-center">{profile.status} {isEmpty(profile.company) ? null : (<span>at {profile.company}</span>)}</p>
                    <p>{isEmpty(profile.location) ? null : (<span>{profile.location}</span>)}</p>
                    <p>
                        {isEmpty(profile.website) ? null : (
                            <a className="mr-2 text-white p-2" href={profile.website} target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-globe fa-2x"></i>
                            </a>
                        )}
                        {isEmpty(profile.social && profile.social.twitter) ? null : (
                            <a className="mr-2 text-white p-2" href={`https://twitter.com/${profile.social.twitter}`} target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter fa-2x"></i>
                            </a>
                        )}
                        
                        {isEmpty(profile.social && profile.social.facebook) ? null : (
                            <a className="mr-2 text-white p-2" href={profile.social.facebook} target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook fa-2x"></i>
                            </a>
                        )}

                        {isEmpty(profile.social && profile.social.linkedin) ? null : (
                            <a className="mr-2 text-white p-2" href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                        )}
                        
                        {isEmpty(profile.social && profile.social.instagram) ? null : (
                            <a className="mr-2 text-white p-2" href={`https://www.instagram.com/${profile.social.instagram}`} target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-instagram fa-2x"></i>
                            </a>
                        )}
                    </p>
                    <p>Email: {profile.user.email}</p>
                </div>
              </div>
            </div>
          </div>
    );
};

export default ProfileHeader;
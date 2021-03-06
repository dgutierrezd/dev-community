import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Link, withRouter} from 'react-router-dom';
// Redux
import {connect} from 'react-redux';
import {createProfile} from '../../actions/profileActions';

const CreateProfile = props => {

    const [handle, saveHandle] = useState('');
    const [company, saveCompany] = useState('');
    const [website, saveWebsite] = useState('');
    const [location, saveLocation] = useState('');
    const [status, saveStatus] = useState('');
    const [skills, saveSkills] = useState('');
    const [githubUsername, saveGithubUsername] = useState('');
    const [bio, saveBio] = useState('');
    const [twitter, saveTwitter] = useState('');
    const [facebook, saveFacebook] = useState('');
    const [linkedin, saveLinkedin] = useState('');
    const [youtube, saveYoutube] = useState('');
    const [instagram, saveInstagram] = useState('');
    const [error, saveErrors] = useState({})

    // Receive the props
    const {errors, history} = props;
    useEffect( () => {
        saveErrors(errors)
    },[errors])

    const submitProfile = e => {
        e.preventDefault();

        const profileData = {
            handle,
            company,
            website,
            status,
            skills,
            location,
            githubUsername,
            bio,
            twitter,
            facebook,
            linkedin,
            youtube,
            instagram
        }

        props.createProfile(profileData, history);
    }

    const statusArray = [
        {
            "value": "0",
            "text": "Select Professional Status" 
        },
        {
            "value": "Developer",
            "text": "Developer" 
        },
        {
            "value": "Junior Developer",
            "text": "Junior Developer" 
        },
        {
            "value": "Senior Developer",
            "text": "Senior Developer" 
        },
        {
            "value": "Manager",
            "text": "Manager" 
        },
        {
            "value": "Student or Learning",
            "text": "Student or Learning" 
        },
        {
            "value": "Instructor or Teacher",
            "text": "Instructor or Teacher" 
        },
        {
            "value": "Intern",
            "text": "Intern" 
        },
        {
            "value": "Other",
            "text": "Other" 
        }
    ]

    return (
        <div className="create-profile">
            <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                <Link to="/dashboard" className="btn btn-light">
                    Go Back
                </Link>
                <h1 className="display-4 text-center">Create Your Dev Profile</h1>
                <p className="lead text-center">Add some information to make look nice your profile.</p>
                <form noValidate  onSubmit={submitProfile}>
                    <div className="form-group">
                        <input type="text" 
                            className={classnames("form-control", {
                                'is-invalid': error.handle
                            })}
                            placeholder="Username or Handle *" name="handle" onChange={e => saveHandle(e.target.value)} />
                        {error.handle && (<div className="invalid-feedback">{error.handle}</div>)}
                        <small className="form-text text-muted">A unique handle or username for your profile URL. Your full name, company name, nickname, etc.</small>
                    </div>
                    <div className="form-group">
                    <textarea className={classnames("form-control", {
                                'is-invalid': error.bio
                            })} 
                            placeholder="Short bio about you" name="bio" onChange={e => saveBio(e.target.value)}></textarea>
                    {error.bio && (<div className="invalid-feedback">{error.bio}</div>)}
                    <small className="form-text text-muted">Tell us a little about yourself.</small>
                    </div>
                    <div className="form-group">
                        <select className={classnames("form-control", {
                                'is-invalid': error.status
                            })} 
                            name="status" onChange={e => saveStatus(e.target.value)}>
                            {statusArray.map(stat => (
                                <option key={stat.value} value={stat.value}>{stat.text}</option>
                            ))}
                        </select>
                        {error.status && (<div className="invalid-feedback">{error.status}</div>)}
                        <small className="form-text text-muted">Give us an idea of where you are at in your career.</small>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className={classnames("form-control", {
                                'is-invalid': error.company
                            })} 
                            placeholder="Company" name="company" onChange={e => saveCompany(e.target.value)} />
                        {error.company && (<div className="invalid-feedback">{error.company}</div>)}
                        <small className="form-text text-muted">Could be your own company or one you work for</small>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className={classnames("form-control", {
                                'is-invalid': error.website
                            })} 
                            placeholder="Website" name="website" onChange={e => saveWebsite(e.target.value)} />
                        {error.website && (<div className="invalid-feedback">{error.website}</div>)}
                        <small className="form-text text-muted">Could be your own or a company website.</small>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className={classnames("form-control", {
                                'is-invalid': error.location
                            })} 
                            placeholder="Location" name="location" onChange={e => saveLocation(e.target.value)} />
                        {error.location && (<div className="invalid-feedback">{error.location}</div>)}
                        <small className="form-text text-muted">City and state or country suggested (ex. Barcelona, ESP)</small>
                    </div>
                    <div className="form-group">
                        <input type="text"  
                            className={classnames("form-control", {
                                'is-invalid': error.skills
                            })}
                            placeholder="Skills *" name="skills" onChange={e => saveSkills(e.target.value)} />
                        {error.skills && (<div className="invalid-feedback">{error.skills}</div>)}
                        <small className="form-text text-muted">Please use comma separated values (ex. HTML,CSS,JavaScript,PHP)</small>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className={classnames("form-control", {
                                'is-invalid': error.githubUsername
                            })} 
                            placeholder="Github Username" name="githubUsername" onChange={e => saveGithubUsername(e.target.value)}/>
                        {error.githubUsername && (<div className="invalid-feedback">{error.githubUsername}</div>)}
                        <small className="form-text text-muted">You could show your latest respositories from Github, including your username.</small>
                    </div>

                    <div className="mb-3 mt-5">
                        <h5>Add Your Social Networks</h5>
                        <span className="text-muted">Optional</span>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-twitter"></i>
                            </span>
                        </div>
                        <input type="text" 
                            className={classnames("form-control", {
                                'is-invalid': error.twitter
                            })}
                            placeholder="Twitter username" name="twitter" onChange={e => saveTwitter(e.target.value)} />
                        {error.twitter && (<div className="invalid-feedback">{error.twitter}</div>)}
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="fa fa-facebook"></i>
                            </span>
                        </div>
                        <input type="text" 
                            className={classnames("form-control", {
                                'is-invalid': error.facebook
                            })}
                            placeholder="Facebook Page URL" name="facebook" onChange={e => saveFacebook(e.target.value)} />
                        {error.facebook && (<div className="invalid-feedback">{error.facebook}</div>)}
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-linkedin"></i>
                            </span>
                        </div>
                        <input type="text"
                            className={classnames("form-control", {
                                'is-invalid': error.linkedin
                            })}
                            placeholder="Linkedin Profile URL" name="linkedin" onChange={e => saveLinkedin(e.target.value)} />
                        {error.linkedin && (<div className="invalid-feedback">{error.linkedin}</div>)}
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="fa fa-youtube"></i>
                            </span>
                        </div>
                        <input type="text" 
                            className={classnames("form-control", {
                                'is-invalid': error.youtube
                            })}
                            placeholder="YouTube Channel URL" name="youtube" onChange={e => saveYoutube(e.target.value)} />
                        {error.youtube && (<div className="invalid-feedback">{error.youtube}</div>)}
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="fa fa-instagram"></i>
                            </span>
                        </div>
                        <input type="text" 
                            className={classnames("form-control", {
                                'is-invalid': error.instagram
                            })}
                            placeholder="Instagram username" name="instagram" onChange={e => saveInstagram(e.target.value)} />
                        {error.instagram && (<div className="invalid-feedback">{error.instagram}</div>)}
                    </div>

                    <input type="submit" className="mb-5 btn btn-primary btn-block mt-4" value="Submit" />
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})

export default connect(mapStateToProps, {createProfile})(withRouter(CreateProfile));
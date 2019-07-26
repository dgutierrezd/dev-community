import React from 'react';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import {removeExperienceCredential} from '../../actions/profileActions';

const ExperienceCredentials = props => {

    const removeCredential = id => {
        props.removeExperienceCredential(id)
    }

    const experience = props.experience;
    var credentials = '';
    if(!experience.length > 0) {
        credentials = (
            <p className="lead">There aren't experience credentials yet.</p>
        )
    } else {
        credentials = experience.map(exp => (            
            <div key={exp._id} className="card mb-3" style={{position: 'relative'}}>
                <div className="card-body">
                    <h5 className="card-title">{exp.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{exp.company}</h6>
                    <p className="lead card-text">{exp.description}</p>
                    <small>{exp.monthStart} {exp.yearStart} - {exp.current ? ('Now') : (`${exp.monthFinish} ${exp.yearFinish}`)}</small>
                    <button className="mt-2 btn btn-outline-danger" style={{right: '3px', top:'0', position: 'absolute'}} onClick={removeCredential.bind(this, exp._id)}>
                        Remove
                    </button>
                </div>
            </div>
        ))
    }
    
    return (
        <div className="col-md-8">
            <h4>Experience</h4>
            {credentials}
        </div>
    );
};

ExperienceCredentials.propTypes = {
    removeExperienceCredential: PropTypes.func.isRequired
}

export default connect(null, {removeExperienceCredential})(ExperienceCredentials);
import React from 'react';
import PropTypes from 'prop-types'
// Redux
import { connect } from 'react-redux';
import {removeEducationCredential} from '../../actions/profileActions';

const EducationCredentials = props => {

    const removeCredential = id => {
        props.removeEducationCredential(id)
    }

    const education = props.education;
    var credentials = '';
    if(!education.length > 0) {
        credentials = (
            <p className="lead">There aren't education credentials yet.</p>
        )
    } else {
        credentials = education.map(edu => (
            <div key={edu._id} className="card mb-3" style={{position: 'relative'}}>
                <div className="card-body">
                    <h5 className="card-title">{edu.school}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{edu.degree}</h6>
                    <p className="lead card-text">{edu.yearStart} - {edu.yearFinish}</p>
                    <button className="mt-2 btn btn-outline-danger" style={{right: '3px', top:'0', position: 'absolute'}} onClick={removeCredential.bind(this, edu._id)}>
                        Remove
                    </button>
                </div>
            </div>
        ))
    }
    
    return (
        <div className='col-md-8'>
            <hr className="mx-100"/>
            <h4>Education</h4>
            {credentials}
        </div>
    );
};

EducationCredentials.propTypes = {
    removeEducationCredential: PropTypes.func.isRequired
}

export default connect(null, {removeEducationCredential})(EducationCredentials);
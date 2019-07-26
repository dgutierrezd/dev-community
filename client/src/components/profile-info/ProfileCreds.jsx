import React from 'react';
// TODO: Prop-Types

const ProfileCreds = props => {

    const {education, experience} = props;

    let experiences;
    if(!experience.length > 0) {
        experiences = (
            <li className="list-group-item">
                <span>There aren't experience credencials yet.</span>
            </li> 
        )
    } else {
        experiences = (
            experience.map(exp => (
                <li key={exp._id} className="list-group-item">
                    <h4>{exp.company}</h4>
                    <p>{exp.monthStart} {exp.yearStart} - {exp.current ? ('Now') : (`${exp.monthFinish} ${exp.yearFinish}`)}</p>
                    <p>
                        <strong>Position:</strong> {exp.title}
                    </p>
                    <p>
                        <strong>Description:</strong> {exp.description}
                    </p>
                </li>
            ))
        )
    }

    let educations;
    if(!education.length > 0) {
        educations = (
            <li className="list-group-item">
                <span>There aren't education credencials yet.</span>
            </li> 
        )
    } else {
        educations = (
            education.map(edu => (
                <li className="list-group-item">
                    <h4>{edu.school}</h4>
                    <p>{edu.yearStart} - {edu.yearFinish}</p>
                    <p>
                        <strong>Degree: </strong>{edu.degree}</p>
                    <p>
                        <p>
                            <strong>Field Of Study: </strong>{edu.fieldOfStudy}
                        </p>
                        <strong>Description:</strong> {edu.description}
                    </p>
                </li>
            ))
        )
    }

    return (
        <div className="mb-2 row">
            <div className="col-md-6">
                <h3 className="text-center text-dark">Experience</h3>
                <ul className="list-group"> 
                    {experiences}
                </ul>
            </div>
            <div className="col-md-6">
                <h3 className="text-center text-dark">Education</h3>
                <ul className="list-group">
                    {educations}
                </ul>
            </div>
        </div>
    );
};

export default ProfileCreds;
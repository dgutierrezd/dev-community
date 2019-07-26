import React from 'react';
import {Link} from 'react-router-dom';

const ProfileAction = () => {
    return (  
        <div className="btn-group mb-4" role="group">
            <Link to="/edit/profile" className="btn btn-light" style={{marginRight: "10px" }}>
                <i className="fa fa-user-circle text-info mr-1"></i> 
                Edit Profile
            </Link>
            <Link to="/experience/new" className="btn btn-light" style={{marginRight: "10px" }}>
                <i className="fa fa-black-tie text-info mr-1"></i>
                Add Experience
            </Link>
            <Link to="/education/new" className="btn btn-light" style={{marginRight: "10px" }}>
                <i className="fa fa-graduation-cap text-info mr-1"></i>
                Add Education
            </Link>
        </div>
    );
}
 
export default ProfileAction;
import React, {useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// Redux
import {connect} from 'react-redux';
import {addExperience} from '../../actions/profileActions';

const AddExperience = props => {

    const [company, saveCompany] = useState('');
    const [title, saveTitle] = useState('');
    const [location, saveLocation] = useState('');
    const [monthStart, saveMonthStart] = useState('');
    const [yearStart, saveYearStart] = useState('');
    const [monthFinish, saveMonthFinish] = useState('');
    const [yearFinish, saveYearFinish] = useState('');
    const [current, saveCurrent] = useState(false);
    const [description, saveDescription] = useState('');
    const [error, saveErrors] = useState({});
    const [disabled, saveDisabled] = useState(false);
    

    // Receive the props
    const {errors, history} = props;
    useEffect( () => {
        saveErrors(errors)
    },[errors])

    const addExperience = e => {
        e.preventDefault();
        const expData = {
            company,
            title,
            location,
            monthStart,
            yearStart,
            monthFinish,
            yearFinish,
            current,
            description
        }
        
        props.addExperience(expData, history)
    }

    const checkCurrent = () => {
        saveDisabled(!disabled)
        saveCurrent(!current)
    }

    const monthArray = [
        {
            "value": "0",
            "text": "Select a month"
        },
        {
            "value": "January",
            "text": "January"
        },
        {
            "value": "February",
            "text": "February"
        },
        {
            "value":"March",
            "text": "March"
        },
        {
            "value":"April",
            "text": "April"
        },
        {
            "value":"May",
            "text": "May"
        },
        {
            "value":"June",
            "text": "June"
        },
        {
            "value":"July",
            "text": "July"
        },
        {
            "value":"August",
            "text": "August"
        },
        {
            "value":"September",
            "text": "September"
        },
        {
            "value":"October",
            "text": "October"
        },
        {
            "value":"November",
            "text": "November"
        },
        {
            "value":"December",
            "text": "December"
        }
    ];

    const yearArray = [
        {
            "value": "0",
            "text": "Select a year"
        },
        {
            "value": "2019",
            "text":"2019"
        },
        {
            "value": "2018",
            "text":"2018"
        },
        {
            "value": "2017",
            "text":"2017"
        },
        {
            "value": "2016",
            "text":"2016"
        },
        {
            "value": "2015",
            "text":"2015"
        },
        {
            "value": "2014",
            "text":"2014"
        },
        {
            "value": "2013",
            "text":"2013"
        },
        {
            "value": "2012",
            "text":"2012"
        },
        {
            "value": "2011",
            "text":"2011"
        },
        {
            "value": "2010",
            "text":"2010"
        },
        {
            "value": "2009",
            "text":"2009"
        },
        {
            "value": "2008",
            "text":"2008"
        },
        {
            "value": "2007",
            "text":"2007"
        },
        {
            "value": "2006",
            "text":"2006"
        },
        {
            "value": "2005",
            "text":"2005"
        },
        {
            "value": "2004",
            "text":"2004"
        },
        {
            "value": "2003",
            "text":"2003"
        },
        {
            "value": "2002",
            "text":"2002"
        },
        {
            "value": "2001",
            "text":"2001"
        },
        {
            "value": "2000",
            "text":"2000"
        },
        {
            "value": "1999",
            "text":"1999"
        },
        {
            "value": "1998",
            "text":"1998"
        },
        {
            "value": "1997",
            "text":"1997"
        },
        {
            "value": "1996",
            "text":"1996"
        },
        {
            "value": "1995",
            "text":"1995"
        },
        {
            "value": "1994",
            "text":"1994"
        },
        {
            "value": "1993",
            "text":"1993"
        },
        {
            "value": "1992",
            "text":"1992"
        },
        {
            "value": "1991",
            "text":"1991"
        },
        {
            "value": "1990",
            "text":"1990"
        },
        {
            "value": "1989",
            "text":"1989"
        },
        {
            "value": "1988",
            "text":"1988"
        },
        {
            "value": "1987",
            "text":"1987"
        },
        {
            "value": "1986",
            "text":"1986"
        },
        {
            "value": "1985",
            "text":"1985"
        },
        {
            "value": "1984",
            "text":"1984"
        },
        {
            "value": "1983",
            "text":"1983"
        },
        {
            "value": "1982",
            "text":"1982"
        },
        {
            "value": "1981",
            "text":"1981"
        },
        {
            "value": "1980",
            "text":"1980"
        },
        {
            "value": "1979",
            "text":"1979"
        },
        {
            "value": "1978",
            "text":"1978"
        },
        {
            "value": "1977",
            "text":"1977"
        },
        {
            "value": "1976",
            "text":"1976"
        },
        {
            "value": "1975",
            "text":"1975"
        },
        {
            "value": "1974",
            "text":"1974"
        },
        {
            "value": "1973",
            "text":"1973"
        },
        {
            "value": "1972",
            "text":"1972"
        },
        {
            "value": "1971",
            "text":"1971"
        },
        {
            "value": "1970",
            "text":"1970"
        },
        {
            "value": "1969",
            "text":"1969"
        },
        {
            "value": "1968",
            "text":"1968"
        },
        {
            "value": "1967",
            "text":"1967"
        },
        {
            "value": "1966",
            "text":"1966"
        },
        {
            "value": "1965",
            "text":"1965"
        },
        {
            "value": "1964",
            "text":"1964"
        },
        {
            "value": "1963",
            "text":"1963"
        },
        {
            "value": "1962",
            "text":"1962"
        },
        {
            "value": "1961",
            "text":"1961"
        },
        {
            "value": "1960",
            "text":"1960"
        }
    ]

    return (
        <div className="section add-experience">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to="/dashboard" className="btn btn-light">
                            Go Back
                        </Link>
                        <h1 className="display-4 text-center">Add Your Experience</h1>
                        <p className="lead text-center">Add your developer/programming jobs.</p>
                        <form onSubmit={addExperience}>
                            <div className="form-group">
                                <input type="text" 
                                    className={classnames("form-control", {
                                        'is-invalid': error.title
                                    })} 
                                    placeholder="Job Title *" name="title" onChange={e => saveTitle(e.target.value)} />
                                {error.title && (<div className="invalid-feedback">{error.title}</div>)}
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                    className={classnames("form-control", {
                                        'is-invalid': error.company
                                    })}
                                    placeholder="Company *" name="company" onChange={e => saveCompany(e.target.value)} />
                                {error.company && (<div className="invalid-feedback">{error.company}</div>)}
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
                            <div className="row">
                                <div className="col">
                                    <h6>Start Month</h6>
                                    <div className="form-group">
                                        <select className={classnames("form-control", {
                                                'is-invalid': error.monthStart
                                            })} 
                                            name="status" onChange={e => saveMonthStart(e.target.value)}>
                                            {monthArray.map(stat => (
                                                <option key={stat.value} value={stat.value}>{stat.text}</option>
                                            ))}
                                        </select>
                                        {error.monthStart && (<div className="invalid-feedback">{error.monthStart}</div>)}
                                    </div>
                                </div>

                                <div className="col">
                                    <h6>Start Year</h6>
                                    <div className="form-group">
                                        <select className={classnames("form-control", {
                                                'is-invalid': error.yearStart
                                            })} 
                                            name="status" onChange={e => saveYearStart(e.target.value)}>
                                            {yearArray.map(stat => (
                                                <option key={stat.value} value={stat.value}>{stat.text}</option>
                                            ))}
                                        </select>
                                        {error.yearStart && (<div className="invalid-feedback">{error.yearStart}</div>)}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col">
                                    <h6>Finish Month</h6>
                                    <div className="form-group">
                                        <select className={classnames("form-control", {
                                                'is-invalid': error.monthFinish
                                            })} 
                                            disabled={disabled ? 'disabled' : ''} name="status" onChange={e => saveMonthFinish(e.target.value)}>
                                            {monthArray.map(stat => (
                                                <option key={stat.value} value={stat.value}>{stat.text}</option>
                                            ))}
                                        </select>
                                        {error.monthFinish && (<div className="invalid-feedback">{error.monthFinish}</div>)}
                                    </div>
                                </div>
                                
                                <div className="col">
                                    <h6>Finish Year</h6>
                                    <div className="form-group">
                                        <select className={classnames("form-control", {
                                                'is-invalid': error.yearFinish
                                            })} 
                                            disabled={disabled ? 'disabled' : ''} name="status" onChange={e => saveYearFinish(e.target.value)}>
                                            {yearArray.map(stat => (
                                                <option key={stat.value} value={stat.value}>{stat.text}</option>
                                            ))}
                                        </select>
                                        {error.yearFinish && (<div className="invalid-feedback">{error.yearFinish}</div>)}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mb-3 custom-control custom-checkbox">
                                <input type="checkbox" 
                                    className={classnames("custom-control-input", {
                                        'is-invalid': error.current
                                    })} 
                                    id="current" name="current" onChange={checkCurrent}/>
                                {error.current && (<div className="invalid-feedback">{error.current}</div>)}
                                <label className="custom-control-label" htmlFor="current" >You are current working that role</label>
                            </div>
                            <div className="form-group">
                                <textarea 
                                    className={classnames("form-control", {
                                        'is-invalid': error.description
                                    })}
                                    placeholder="Job Description" name="description" onChange={e => saveDescription(e.target.value)}></textarea>
                                {error.description && (<div className="invalid-feedback">{error.description}</div>)}
                                <small className="form-text text-muted">Some of your responsabilities, etc</small>
                            </div>
                            <input type="submit" className="mb-5 btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

AddExperience.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    addExperience: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})

export default connect(mapStateToProps, {addExperience})(withRouter(AddExperience));
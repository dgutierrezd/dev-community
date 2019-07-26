import React, {useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// Redux
import {connect} from 'react-redux';
import {addEducation} from '../../actions/profileActions';

const AddEducation = props => {

    const [school, saveSchool] = useState('');
    const [degree, saveDegree] = useState('');
    const [fieldOfStudy, saveFieldOfStudy] = useState('');
    const [yearStart, saveYearStart] = useState('');
    const [yearFinish, saveYearFinish] = useState('');
    const [description, saveDescription] = useState('');
    const [error, saveErrors] = useState({});
    

    // Receive the props
    const {errors, history} = props;
    useEffect( () => {
        saveErrors(errors)
    },[errors])

    const addEducation = e => {
        e.preventDefault();
        const eduData = {
            school,
            degree,
            fieldOfStudy,
            yearStart,
            yearFinish,
            description
        }
        
        props.addEducation(eduData, history)
    }

    const yearStartArray = [
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

    const yearFinishArray = [
        {
            "value": "0",
            "text": "Select a year"
        },
        {
            "value": "2025",
            "text": "2025"
        },
        {
            "value": "2024",
            "text": "2024"
        },
        {
            "value": "2023",
            "text": "2023"
        },
        {
            "value": "2022",
            "text": "2022"
        },
        {
            "value": "2021",
            "text": "2021"
        },
        {
            "value": "2020",
            "text": "2020"
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
                        <h1 className="display-4 text-center">Add Education</h1>
                        <p className="lead text-center">Add your achievements.</p>
                        <form onSubmit={addEducation}>
                            <div className="form-group">
                                <input type="text" 
                                    className={classnames("form-control", {
                                        'is-invalid': error.school
                                    })} 
                                    placeholder="School *" name="school" onChange={e => saveSchool(e.target.value)} />
                                {error.school && (<div className="invalid-feedback">{error.school}</div>)}
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                    className={classnames("form-control", {
                                        'is-invalid': error.degree
                                    })}
                                    placeholder="Degree *" name="degree" onChange={e => saveDegree(e.target.value)} />
                                {error.degree && (<div className="invalid-feedback">{error.degree}</div>)}
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                    className={classnames("form-control", {
                                        'is-invalid': error.fieldOfStudy
                                    })}
                                    placeholder="Field of Study *" name="fieldOfStudy" onChange={e => saveFieldOfStudy(e.target.value)} />
                                {error.fieldOfStudy && (<div className="invalid-feedback">{error.fieldOfStudy}</div>)}
                                <small className="form-text text-muted">Discipline of that degree (ex. Humanities, Science, Technology)</small>
                            </div>
                            
                            <h6>Start Year</h6>
                            <div className="form-group">
                                <select className={classnames("form-control", {
                                        'is-invalid': error.yearStart
                                    })} 
                                    name="status" onChange={e => saveYearStart(e.target.value)}>
                                    {yearStartArray.map(stat => (
                                        <option key={stat.value} value={stat.value}>{stat.text}</option>
                                    ))}
                                </select>
                                {error.yearStart && (<div className="invalid-feedback">{error.yearStart}</div>)}
                            </div>

                            <h6>Finish Year (or Expected)</h6>
                            <div className="form-group">
                                <select className={classnames("form-control", {
                                        'is-invalid': error.yearFinish
                                    })} 
                                    name="status" onChange={e => saveYearFinish(e.target.value)}>
                                    {yearFinishArray.map(stat => (
                                        <option key={stat.value} value={stat.value}>{stat.text}</option>
                                    ))}
                                </select>
                                {error.yearFinish && (<div className="invalid-feedback">{error.yearFinish}</div>)}
                            </div>

                            <div className="form-group">
                                <textarea 
                                    className={classnames("form-control", {
                                        'is-invalid': error.description
                                    })}
                                    placeholder="Job Description" name="description" onChange={e => saveDescription(e.target.value)}></textarea>
                                {error.description && (<div className="invalid-feedback">{error.description}</div>)}
                                <small className="form-text text-muted">Some about you learned or are learning.</small>
                            </div>
                            <input type="submit" className="mb-5 btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

AddEducation.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    addEducation: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})

export default connect(mapStateToProps, {addEducation})(withRouter(AddEducation));
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileGitHub = props => {

    const [clientId, saveClientId] = useState('f163f6f0460e295140da')
    const [clientSecret, saveClientSecret] = useState('3039236eec63a64c3dbb5a8749713439b6fbfb84')
    const [count, saveCount] = useState(5)
    const [sort, saveSort] = useState('created: asc')
    const [repos, saveRepos] = useState([])

    useEffect(() => {
        const {username} = props;
        
        fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
            .then(res => 
                res.json()    
            )
            .then(data => {
                saveRepos(data)
            })
            .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const repoItems = repos.map(rep => (
        <div key={rep.id} className="card card-body mb-2">
            <div className="row">
                <div className="col-md-6">
                    <h4>
                        <a href={rep.html_url} className="text-info" target="_blank" rel="noopener noreferrer">
                            {rep.name}
                        </a>
                    </h4>
                    <p>{rep.description}</p>
                </div>
                <div className="col-md-6">
                    <span className="badge badge-info mr-1">
                        Stars: {rep.stargazers_count}
                    </span>
                    <span className="badge badge-secondary mr-1">
                        Watchers: {rep.watchers_count}
                    </span>
                    <span className="badge badge-success">
                        Forks: {rep.forks_count}
                    </span>
                </div>
            </div>
        </div>
    ))

    return (
        <div>
            <hr/>
            <h3 className="mb-4">Github Repositories</h3>
            {repoItems}
        </div>
    );
};

ProfileGitHub.propTypes = {
    username: PropTypes.string.isRequired
}

export default ProfileGitHub;
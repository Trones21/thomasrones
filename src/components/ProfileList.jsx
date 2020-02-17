import React from 'react';
import Profile from './Profile';
import PropTypes from 'prop-types';
import '../css/Profile.css';
import SOLogo from '../images/stackoverflow.png';
import TableauLogo from '../images/tableau.png';
import GithubLogo from '../images/github.png';
import TBioLogo from '../images/TBio.png';
import TwitterLogo from '../images/twitter.png';


// const Profiles = [{
//     Title:"Stack Overflow"
// },
// ]


const ProfileList = () => {
    return (
        <>
        <div className="profileList"
        
        >
        <Profile SiteName="Stack Overflow" img={SOLogo}/>
        <Profile SiteName="Tableau" img={TableauLogo}/>
        <Profile SiteName="Github" img={GithubLogo}/>
        <Profile SiteName="T-Bio" img={TBioLogo}/>
        <Profile SiteName="Twitter" img={TwitterLogo}/>
        </div>
        </>
    )
};

export default ProfileList;
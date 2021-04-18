import React from 'react';

import PropTypes from 'prop-types';
import '../css/Profiles.css';
import SOLogo from '../images/stackoverflow.png';
import TableauLogo from '../images/tableau.png';
import GithubLogo from '../images/github.png';
import TBioLogo from '../images/TBio.png';
import TwitterLogo from '../images/twitter.png';
import SOLogoDef from '../images/stackoverflowDef.png';
import TableauLogoDef from '../images/tableauDef.png';
import GithubLogoDef from '../images/githubDef.png';
import TwitterLogoDef from '../images/twitterDef.png';

import Profile from './Profile';




const ProfileList = () => {
    return (
        <>
        <div className="profileList"
    
        >
        <Profile SiteName="Stack Overflow" hoverImg={SOLogo} defaultImg={SOLogoDef} profileURL="https://stackoverflow.com/users/6314220/thomasrones" />
        <Profile SiteName="Tableau" hoverImg={TableauLogo} defaultImg={TableauLogoDef} profileURL="https://public.tableau.com/profile/thomas.j.rones#!/" />
        <Profile SiteName="Github" hoverImg={GithubLogo} defaultImg={GithubLogoDef} profileURL="https://github.com/Trones21" />
        {/* <Profile SiteName="T-Bio" img={TBioLogo}/> */}
        <Profile SiteName="Twitter" hoverImg={TwitterLogo} defaultImg={TwitterLogoDef} profileURL="https://twitter.com/ThomasRones" />
        </div>
        </>
    )
};

export default ProfileList;
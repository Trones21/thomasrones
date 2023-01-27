import React from 'react';

import PropTypes from 'prop-types';
import '../css/Profiles.css';

/*Could also import the entire folder, but then the filenames can't be different than the import names (More diffculty in debugging)*/
//importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
//PNGs commented out at EOF

/*Color Logos - Show/Animate on Hover*/
import AlgoExpertLogo from '../images/profileLogos/algoexpert.webp';
import GithubLogo from '../images/profileLogos/github.webp';
import HackerRankLogo from '../images/profileLogos/hackerrank.webp';
import RedditLogo from '../images/profileLogos/reddit.webp';
import RosalindLogo from '../images/profileLogos/rosalind.webp';
import SOLogo from '../images/profileLogos/stackoverflow.webp';
import TableauLogo from '../images/profileLogos/tableau-text-public.webp';
import TableauForumsLogo from '../images/profileLogos/tableau-text-forums.webp';
import TwitterLogo from '../images/profileLogos/twitter.webp';

/* B&W Logos */
import AlgoExpertLogoDef from '../images/profileLogos/algoexpertDef.webp';
import GithubLogoDef from '../images/profileLogos/githubDef.webp';
import HackerRankLogoDef from '../images/profileLogos/hackerrankDef.webp';
import RedditLogoDef from '../images/profileLogos/redditDef.webp';
import RosalindLogoDef from '../images/profileLogos/rosalindDef.webp';
import SOLogoDef from '../images/profileLogos/stackoverflowDef.webp';
import TableauLogoDef from '../images/profileLogos/tableauDef.webp';
import TableauForumsLogoDef from '../images/profileLogos/tableauDef.webp';
import TwitterLogoDef from '../images/profileLogos/twitterDef.webp';


import Profile from './Profile';
import ProfileList from './ProfileList';

import TestComp from './TestComp';

const chunkArray = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size));


//ToDo: 
//Create categories - ex - code, social, etc.
//Write code to create uniform logo sizes
const ProfileLists = () => {
    
    let profilesJson = [
        
        {SiteName:"Github", hoverImg:GithubLogo, defaultImg:GithubLogoDef ,profileURL:"https://github.com/Trones21"},
        {SiteName:"Stack Overflow", hoverImg:SOLogo, defaultImg:SOLogoDef, profileURL:"https://stackoverflow.com/users/6314220/thomasrones"},
        {SiteName:"HackerRank", hoverImg:HackerRankLogo, defaultImg:HackerRankLogoDef ,profileURL:"https://www.hackerrank.com/trones_de"},
        {SiteName:"Rosalind", hoverImg:RosalindLogo, defaultImg:RosalindLogoDef, profileURL:"http://rosalind.info/users/ITroneSI/" },
        {SiteName:"Reddit", hoverImg:RedditLogo, defaultImg:RedditLogoDef, profileURL:"https://www.reddit.com/user/AncientElevator9"}, 
        {SiteName:"Twitter", hoverImg:TwitterLogo, defaultImg:TwitterLogoDef, profileURL:"https://twitter.com/ThomasRones"},
        {SiteName:"Tableau" ,hoverImg:TableauLogo, defaultImg:TableauLogoDef, profileURL:"https://public.tableau.com/profile/thomas.j.rones#!/"},
        {SiteName:"TableauForums" ,hoverImg:TableauForumsLogo, defaultImg:TableauForumsLogoDef, profileURL:"https://community.tableau.com/s/profile/0054T000001O4T0"},
        
        
        // {SiteName:"AlgoExpert",hoverImg:AlgoExpertLogo, defaultImg:AlgoExpertLogoDef, profileURL:"Need to complete 100 algorithms"}
    ];
    //Split into groups for each row, four per row seems to work well for me
    let groups = chunkArray(profilesJson, 4);
    return (
        <>  
        <div className="profileLists">   
            {groups.map(i => <ProfileList arr={i}/> )}
        </div>
         </>
    )
}

export default ProfileLists;


// /*Color Logos - Show/Animate on Hover*/
// import AlgoExpertLogo from '../images/profileLogos/algoexpert.png';
// import GithubLogo from '../images/profileLogos/github.png';
// import HackerRankLogo from '../images/profileLogos/hackerrank.png';
// import RedditLogo from '../images/profileLogos/reddit.png';
// import RosalindLogo from '../images/profileLogos/rosalind.png';
// import SOLogo from '../images/profileLogos/stackoverflow.png';
// import TableauLogo from '../images/profileLogos/tableau-text-public.png';
// import TableauForumsLogo from '../images/profileLogos/tableau-text-forums.png';
// import TwitterLogo from '../images/profileLogos/twitter.png';

// /* B&W Logos */
// import AlgoExpertLogoDef from '../images/profileLogos/algoexpertDef.png';
// import GithubLogoDef from '../images/profileLogos/githubDef.png';
// import HackerRankLogoDef from '../images/profileLogos/hackerrankDef.png';
// import RedditLogoDef from '../images/profileLogos/redditDef.png';
// import RosalindLogoDef from '../images/profileLogos/rosalindDef.png';
// import SOLogoDef from '../images/profileLogos/stackoverflowDef.png';
// import TableauLogoDef from '../images/profileLogos/tableauDef.png';
// import TableauForumsLogoDef from '../images/profileLogos/tableauDef.png';
// import TwitterLogoDef from '../images/profileLogos/twitterDef.png';

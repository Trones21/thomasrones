import React from 'react';

import PropTypes from 'prop-types';
import '../css/Profiles.css';

/*Could also import the entire folder, but then the filenames can't be different than the import names (More diffculty in debugging)*/
//importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

/*Color Logos - Show/Animate on Hover*/
import AlgoExpertLogo from '../images/algoexpert.png';
import GithubLogo from '../images/github.png';
import HackerRankLogo from '../images/hackerrank.png';
import RedditLogo from '../images/reddit.png';
import RosalindLogo from '../images/rosalind.png';
import SOLogo from '../images/stackoverflow.png';
import TableauLogo from '../images/tableau-text-public.png';
import TableauForumsLogo from '../images/tableau-text-forums.png';
import TwitterLogo from '../images/twitter.png';

/* B&W Logos */
import AlgoExpertLogoDef from '../images/algoexpertDef.png';
import GithubLogoDef from '../images/githubDef.png';
import HackerRankLogoDef from '../images/hackerrankDef.png';
import RedditLogoDef from '../images/redditDef.png';
import RosalindLogoDef from '../images/rosalindDef.png';
import SOLogoDef from '../images/stackoverflowDef.png';
import TableauLogoDef from '../images/tableauDef.png';
import TableauForumsLogoDef from '../images/tableauDef.png';
import TwitterLogoDef from '../images/twitterDef.png';

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
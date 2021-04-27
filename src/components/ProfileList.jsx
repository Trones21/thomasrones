import React from 'react';
import '../css/Profiles.css';
import Profile from './Profile';

const ProfileList = (props) => {

    let profiles = props.arr.map(i => <Profile 
        SiteName = {i.SiteName}
        hoverImg = {i.hoverImg}
        defaultImg = {i.defaultImg}
        profileURL = {i.profileURL} /> )
    
        return(
        <div className="profileList">
            {profiles}
        </div>

    )
}

export default ProfileList;
import React from 'react'
import Profile from './Profile'
import upworkHover from '../images/profileLogos/upwork.png'
import upworkDefault from '../images/profileLogos/upworkDef.png'

const Freelancing = () => {

    return(
        <div>
            <h3 style={{marginTop:'20px',
        marginBottom:'10px'}}>
            Freelancing Profiles:
        </h3>
            
            {/* <Profile
            SiteName = "Dice"
            hoverImg = {i.hoverImg}
            defaultImg = {i.defaultImg}
            profileURL = {i.profileURL}/> */}
            
            {/* <Profile
            SiteName = "Toptal"
            hoverImg = {i.hoverImg}
            defaultImg = {i.defaultImg}
            profileURL = {i.profileURL}/> */}

            <Profile
            SiteName = "UpWork"
            hoverImg = {upworkHover}
            defaultImg = {upworkDefault}
            profileURL = "https://www.upwork.com/o/profiles/users/~010c1e8a7a8dd563bd/"/>

        </div>
    )
}

export default Freelancing;
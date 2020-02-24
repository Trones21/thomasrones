import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import "../css/Profile.css";

Profile.propTypes = {
    siteName: PropTypes.string,
    profileURL: PropTypes.string,
    hoverImg: PropTypes.string,
    defaultImg: PropTypes.string,
}

function Profile(props){
        const [img , setImg] = useState(props.defaultImg);

    return (
        <a
        className="profile" 
        onMouseEnter={() => setImg(props.hoverImg)}
        onMouseOut={() => setImg(props.defaultImg)}
        href={props.profileURL}
        target="_blank"
        rel="noopener noreferrer"
        >
            <img  
            style={{
                height:"10vh"
            }}
            src={img} 
            alt={props.siteName}></img>
        </a>
    )
        
};

export default Profile;


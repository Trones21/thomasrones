import React from 'react';
import PropTypes from 'prop-types';

Profile.propTypes = {
    siteName: PropTypes.string,
    profileURL: PropTypes.string
}

function Profile(props){
    

const handleHover = () => {

}


    return (
        <div
        className="profile" 
        onHover={handleHover}
        >
            <img 
            href={props.profileURL}
            style={{
                height:"10vh"
            }}
            src={props.img} 
            alt={props.siteName}></img>
        </div>
    )
};

export default Profile;


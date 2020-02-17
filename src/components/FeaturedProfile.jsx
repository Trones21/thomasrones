import React from 'react';
import PropTypes from 'prop-types';

FeaturedProfile.propTypes = {
    siteName: PropTypes.string,
    profileURL: PropTypes.string
}

function FeaturedProfile(props){
    

const handleHover = () => {

}


    return (
        <div
        className="featuredProfile" 
        onHover={handleHover}
        >
            <img 
            href={props.profileURL}
            style={{
                height:"20vh"
            }}
            src={props.img} 
            alt={props.siteName}></img>
        </div>
    )
};

export default FeaturedProfile;
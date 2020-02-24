import React, {useState} from 'react';
import PropTypes from 'prop-types';

FeaturedProfile.propTypes = {
    siteName: PropTypes.string,
    profileURL: PropTypes.string,
    hoverImg: PropTypes.string,
    defaultImg: PropTypes.string,
}

function FeaturedProfile(props){
    const [img , setImg] = useState(props.defaultImg);

    return (
        <a
        className="featuredProfile" 
        onMouseEnter={() => setImg(props.hoverImg)}
        onMouseOut={() => setImg(props.defaultImg)}
        href={props.profileURL}
        target="_blank"
        rel="noopener noreferrer"
        >
            <img
            style={{
                height:"20vh"
            }}
            src={img} 
            alt={props.siteName}>
               
            </img>
        </a>
    )
};

export default FeaturedProfile;
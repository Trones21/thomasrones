import React from 'react';
import propTypes from 'prop-types';
import '../css/buttons.css'


YTPlaylistButton.propTypes = {
    text: propTypes.string
    
}
    


function YTPlaylistButton(props){

    const handleClick = () => props.getIDs(props.text)
    
    return (
    
       <>
        <div class="playlist-selector" onClick={handleClick}>{props.text}
        </div>
        </>
        )

}

export default YTPlaylistButton
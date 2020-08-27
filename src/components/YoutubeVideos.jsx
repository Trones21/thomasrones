import React from 'react';
import ReactPlayer from 'react-player';
import '../css/youtubePlayer.css';

const YoutubeVideos = (props) => {
    let YTplayers = [] 
    for (let vidID of props.vidIDs){
    YTplayers.push(
    <div className='player-wrapper'>
        <ReactPlayer 
        className='react-player'
        url={'https://youtu.be/'+ vidID}
        playing = {false}
        controls = {true}  
        width = '100%'
        height = '100%'
        />
    </div>
    );
    }

    return (
        <>
        <div style={{padding:'10px'}}> 
       {YTplayers}
        </div>
        </>
    );
};

export default YoutubeVideos;
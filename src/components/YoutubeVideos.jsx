import React from 'react';
import ReactPlayer from 'react-player';
import '../css/youtubePlayer.css';

const YoutubeVideos = () => {
    
    const vidIDs = ['RU2TBiwAI3A','y6bVVeqySCw','ajOHKpZg9gA'];
    let YTplayers = [] 
    for (let vidID of vidIDs){
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
        <h3 style={{marginTop:'10px',
        marginBottom:'10px'}}>
        Recent YouTube Videos:
        </h3>
        <div style={{padding:'10px'}}> 
       {YTplayers}
        </div>
        </>
    );
};

export default YoutubeVideos;
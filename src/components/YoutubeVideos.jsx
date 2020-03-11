import React from 'react';
import ReactPlayer from 'react-player';
import '../css/youtubePlayer.css';

const YoutubeVideos = () => {
    return (
        <>
        <h3 style={{marginTop:'10px',
        marginBottom:'10px'}}>
        Recent YouTube Videos:
        </h3>
        <div style={{padding:'10px'}}> 
        <div className='player-wrapper'>
            <ReactPlayer 
            className='react-player'
            url='https://youtu.be/y6bVVeqySCw' 
            playing = {false}
            controls = {true}  
            width = '100%'
            height = '100%'
            />
        </div>
        <div className='player-wrapper'>
            <ReactPlayer 
            className='react-player'
            url='https://www.youtube.com/watch?v=ajOHKpZg9gA' 
            playing = {false}
            controls = {true} 
            width = '100%'
            height = '100%'
            />
        </div>
        </div>
        </>
    );
};

export default YoutubeVideos;
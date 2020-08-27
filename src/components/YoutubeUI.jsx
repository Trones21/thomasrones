import React, {useState} from 'react';
import YTPlaylistButton from './YTPlaylistButton';
import YoutubeVideos from './YoutubeVideos';
import youtubeLogoColor from '../images/youtube-logo-colored.png';
import '../css/youtubeUI.css';

const YoutubeUI = () => {
    
    const [videoIDs, setVideoIDs] = useState(['iB7vv6fCNyQ','i9CCUvCWnsE']);

    
    async function getvideoIDsfromAPI(playlistID){
        const playlistBaseURL = "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails"
        const APIKey = "AIzaSyA-r3TL-FX1Y5I989f_ZCyTKYyIpGIinjs";
        let res = await fetch(playlistBaseURL + "&playlistId=" + playlistID + "&key="+ APIKey)
        let data = await res.json();
        return data.items.map((i)=> i.contentDetails.videoId)
    }
    
   async function getVideoIDs(selectedPlaylist){
        
        let videoIDs = []; 
       switch(selectedPlaylist){
            //Get IDs from context
            case "Most Liked":
                console.log("Most Liked")
                videoIDs = ["1", "2", "3"]
                break;
            case "Most Recent":
                console.log("Most Recent")
                videoIDs = ["1", "2", "3"]
                break;
            case "Most Views":
                console.log("Most Views")
                break;
            //Call API Now
            case "BioInformatics":
                videoIDs = await getvideoIDsfromAPI("PLU8JULtUESmQge-n7sUBzZOEX5xHR7UIF");
                  break;
            case "SciGames":
                videoIDs = await getvideoIDsfromAPI("PLU8JULtUESmQJmuT-BNQ0XUg_PuOqQ8G-");
                break;
            case "UserScripts":
                videoIDs = await getvideoIDsfromAPI("PLU8JULtUESmTUxj5--H8sGOjZD7bIw-nL");
                console.log(videoIDs);
                break;
            default:
                console.log("Invalid Playlist text passed to function")
                
        }

           
        setVideoIDs(videoIDs);
    }


    return (
    
       <>
       <div class="youtube-header">
        <h3 style={{marginTop:'10px',
        marginBottom:'10px'}}>
        YouTube
        </h3>
        <img class="youtubeLogo" src={youtubeLogoColor}></img>
        </div>
        <div class="playlist-selector-container">
            <YTPlaylistButton text="Most Recent" getIDs={getVideoIDs} />
            <YTPlaylistButton text="Most Views" getIDs={getVideoIDs} />
            <YTPlaylistButton text="Most Liked" getIDs={getVideoIDs} />
        </div>
        <div class="playlist-selector-container">
            <YTPlaylistButton text="UserScripts" getIDs={getVideoIDs}/>
            <YTPlaylistButton text="BioInformatics"getIDs={getVideoIDs}/>
            <YTPlaylistButton text="SciGames"getIDs={getVideoIDs}/>
        </div>
        <YoutubeVideos  vidIDs ={videoIDs} />
        </>
        )

}

export default YoutubeUI
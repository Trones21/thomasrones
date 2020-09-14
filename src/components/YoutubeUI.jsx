import React, {useState, useEffect} from 'react';
import YTPlaylistButton from './YTPlaylistButton';
import YoutubeVideos from './YoutubeVideos';
import youtubeLogoColor from '../images/youtube-logo-colored.png';
import '../css/youtubeUI.css';

const YoutubeUI = () => {
    
    const [videoIDs, setVideoIDs] = useState(['iB7vv6fCNyQ','i9CCUvCWnsE']);
    const APIKey = "AIzaSyA-r3TL-FX1Y5I989f_ZCyTKYyIpGIinjs";
    const BaseURL = "https://www.googleapis.com/youtube/v3/";
    const uploadsPlaylistID = "UU-atnCyiweZ-L16Of82d4Vg";
    const [mostLiked, setMostLiked] = useState([]);
    const [mostViewed, setMostViewed] = useState([]);
    const [mostRecent, setMostRecent] = useState([]);

    useEffect(()=> {
        console.log("using Effect")
        getVideosStatsfromAPI(uploadsPlaylistID);   
    }, []);


    async function getVideosStatsfromAPI(uploadsPlaylistID){
        //Modify this part so that all the videoIDs are retrieved (not just the first five)
        let videoIDs = await getvideoIDsfromAPI(uploadsPlaylistID)
        let statsArr = [];
        //refactor to make it actually async
        for(let videoID of videoIDs){
            let res = await fetch(BaseURL + "videos?part=statistics&id=" + videoID + "&key="+ APIKey);
            let data = await res.json();
            console.log(data);
            statsArr.push({id: data.items[0].id, stats:data.items[0].statistics});
        }

        setMostLiked(setIDList(statsArr, 'likeCount', 3));
        setMostViewed(setIDList(statsArr, 'viewCount', 3));
        setMostRecent(await getvideoIDsfromAPI(uploadsPlaylistID))
    }

    function setIDList(statsArr, sortBy, maxNum){
        //Sort Desc - Dynamically access property using string variable
        let sorted = statsArr.sort((a,b) => {
            return b.stats[sortBy] - a.stats[sortBy]
            })
            console.log(sorted.slice(0, maxNum).map((i)=> i.id))
            return sorted.slice(0, maxNum - 1).map((i)=> i.id)
    }


    async function getvideoIDsfromAPI(playlistID){
        let res = await fetch(BaseURL + "playlistItems?part=contentDetails&playlistId=" + playlistID + "&key="+ APIKey);
        let data = await res.json();
        return await data.items.map((i)=> i.contentDetails.videoId);
    }
    
   async function getVideoIDs(selectedPlaylist){
        
        let videoIDs = []; 
    //These case statements match the text prop of YTPlaylistButton
       switch(selectedPlaylist){
            case "Most Liked":
                videoIDs = mostLiked;
                break;
            case "Most Recent":
                console.log("No amount set -- YT API gets last 5")
                videoIDs = mostRecent;
                break;
            case "Most Views":
                videoIDs = mostViewed;
                break;
            //Call API Now -- PK-ME - remember to update these playlists
            case "BioInformatics":
                videoIDs = await getvideoIDsfromAPI("PLU8JULtUESmQge-n7sUBzZOEX5xHR7UIF");
                  break;
            case "API Looping":
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
       <div className="youtube-header">
        <h3>
        YouTube
        </h3>
        <img className="youtubeLogo" src={youtubeLogoColor} alt="Youtube Logo"></img>
        </div>
        <div className="playlist-selector-container">
            <YTPlaylistButton text="Most Recent" getIDs={getVideoIDs} />
            <YTPlaylistButton text="Most Views" getIDs={getVideoIDs} />
            <YTPlaylistButton text="Most Liked" getIDs={getVideoIDs} />
        </div>
        <div className="playlist-selector-container">
            <YTPlaylistButton text="UserScripts" getIDs={getVideoIDs}/>
            <YTPlaylistButton text="BioInformatics"getIDs={getVideoIDs}/>
            <YTPlaylistButton text="API Looping"getIDs={getVideoIDs}/>
        </div>
        <YoutubeVideos  vidIDs ={videoIDs} />
        </>
        )

}

export default YoutubeUI
import React, {useState, useEffect} from 'react';
import YTPlaylistButton from './YTPlaylistButton';
import YoutubeVideos from './YoutubeVideos';
import youtubeLogoColor from '../images/youtube-logo-colored.png';
import '../css/youtubeUI.css';

const YoutubeUI = () => {
    
    const [videoIDs, setVideoIDs] = useState([]);
    const APIKey = process.env.REACT_APP_YTAPIKEY;
    const BaseURL = "https://www.googleapis.com/youtube/v3/";
    const uploadsPlaylistID = "UU-atnCyiweZ-L16Of82d4Vg";
    const playlistsToExclude = ["PLU8JULtUESmSL-ViNugXC0F5vdNRV6Y8L", "PLU8JULtUESmTXjidymMTqspFbn0bQ5ue0"]
    const [mostLiked, setMostLiked] = useState([]);
    const [mostViewed, setMostViewed] = useState([]);
    const [mostRecent, setMostRecent] = useState([]);
    const [altMsg, setAltMsg] = useState();

    useEffect(()=> {
        console.log("using Effect")
        getVideosStatsfromAPI(uploadsPlaylistID, playlistsToExclude);
        console.log(playlistsToExclude)   
    }, []);


    async function getVideosStatsfromAPI(uploadsPlaylistID, playlistsToExclude){
        //Only one call is made with maxResults=50, not sure what the YT limit is per call
        //refactor to make it actually async
        
        let uploadedVideos = await getvideoIDsfromAPI(uploadsPlaylistID);
        let excludedVideos = [];
        for (let playlistID of playlistsToExclude){
            excludedVideos.push(...await getvideoIDsfromAPI(playlistID))
        }
        let filteredVideos = await uploadedVideos.filter((id) => excludedVideos.indexOf(id) === -1)
        console.log(uploadedVideos)
        console.log(excludedVideos)
        console.log(filteredVideos) 
        let statsArr = [];
       
        for(let videoID of filteredVideos){

            let res = await fetch(BaseURL + "videos?part=statistics&id=" + videoID + "&key="+ APIKey);
            let data = await res.json();
            statsArr.push({id: data.items[0].id, stats:data.items[0].statistics});
        }

        setMostLiked(setIDList(statsArr, 'likeCount', 3));
        setMostViewed(setIDList(statsArr, 'viewCount', 3));
        setMostRecent(filteredVideos.slice(0, 3))
    }

    function setIDList(statsArr, sortBy, maxNum){
        //Sort Desc b - a
        let sorted = statsArr.sort((a,b) => {
            return b.stats[sortBy] - a.stats[sortBy]
            })
            //console.log(sorted.slice(0, maxNum).map((i)=> i.id))
            return sorted.slice(0, maxNum - 1).map((i)=> i.id)
    }


    async function getvideoIDsfromAPI(playlistID){
        let res = await fetch(BaseURL + "playlistItems?part=contentDetails&playlistId=" + playlistID + "&maxResults=50&key="+ APIKey);
        let data = await res.json();
        return await data.items.map((i)=> i.contentDetails.videoId);
    }
    
   async function getVideoIDs(selectedPlaylist){
    //reset altMsg so it doesn't show     
    setAltMsg("")
        let videoIDs = []; 
    //These case statements match the text prop of YTPlaylistButton
       switch(selectedPlaylist){
            case "Most Liked":
                videoIDs = mostLiked;
                break;
            case "Most Recent":
                videoIDs = mostRecent;
                break;
            case "Most Views":
                videoIDs = mostViewed;
                break;
            //Call API Now -- PK-ME - remember to update these playlists
            case "BioInformatics":
                videoIDs = await getvideoIDsfromAPI("PLU8JULtUESmQge-n7sUBzZOEX5xHR7UIF");
                setAltMsg("Coming Soon...");
                  break;
            case "API Looping":
                videoIDs = await getvideoIDsfromAPI("PLU8JULtUESmQBKYgPr-dfPzGIESx4KduO");
                break;
            case "UserScripts":
                videoIDs = await getvideoIDsfromAPI("PLU8JULtUESmTUxj5--H8sGOjZD7bIw-nL");
                break;
            default:
                console.log("Invalid Playlist text passed to function")
                
        }

        setVideoIDs(videoIDs);
       
    }

    let VideoSection = "";
    if(altMsg !== ""){
        VideoSection = <h3>{altMsg}</h3>
     }
    else{
        VideoSection = <YoutubeVideos  vidIDs={videoIDs}/>
    }
    return (
    
       <>
       <div className="youtube-header">
        <h3>
        YouTube
        </h3>
        <img className="youtubeLogo" src={youtubeLogoColor} alt="Youtube Logo"></img>
        </div>
        <div className="playlist-selectorGroup-container">
        <div className="playlist-selector-container">
            <YTPlaylistButton text="Most Recent" getIDs={getVideoIDs} />
            <YTPlaylistButton text="Most Views" getIDs={getVideoIDs} />
            <YTPlaylistButton text="Most Liked" getIDs={getVideoIDs} />
        </div>
        <div className="playlist-selector-container">
            <YTPlaylistButton text="UserScripts" getIDs={getVideoIDs}/>
            <YTPlaylistButton text="BioInformatics"getIDs={getVideoIDs} />
            <YTPlaylistButton text="API Looping"getIDs={getVideoIDs}/>
        </div>
        </div>
        {VideoSection}
        </>
        )

}

export default YoutubeUI
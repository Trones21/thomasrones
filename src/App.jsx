import React from 'react';
import './css/App.css';

import headshot from './images/headshot.jpg';
import bgPic from './images/hs1bw-bgRemoved.png';
import LinkedInLogo from './images/linkedin.png';
import PluralsightLogo from './images/pluralsight.png';
import LinkedInLogoDef from './images/linkedinDef.png';
import PluralsightLogoDef from './images/pluralsightDef.png';

import FeaturedProfile from './components/FeaturedProfile';
import ProfileList from './components/ProfileList';
import WorkSamplesBasic from './components/WorkSamplesBasic';
import YoutubeUI from './components/YoutubeUI';
import TabContainer from './components/TabContainer';
import QuoteRotator from './components/QuoteRotator';


const PicStyle = {
  height: "20vh",
  borderRadius: '50%'
}

const BgPicStyle = {
  height: "150vh",
  position: "absolute",
  opacity: ".5",
  zIndex: "1"
}

const AppStyle = {
  margin: '0 auto',
}

function App() {
  console.log("B:" + process.env.REACT_APP_YTAPIKEY)
  return (
    <div className="App">
      <div style={AppStyle}>
        <br></br>
        {/* <div>
          <img src={headshot} alt="Me" style={PicStyle}></img>
        </div> */}
        <div>
          <img src={bgPic} alt="Me" style={BgPicStyle}></img>
        </div>
        <div style={{ padding: "1vh" }}>
          <p style={{ fontSize: "40px", margin: "5px" }}>Thomas Rones</p>
          <p style={{ margin: "10px" }}>Software Engineering + BioInformatics</p> {/*😂*/}
          {/* <QuoteRotator/> */}
        </div>
        <div style={{ padding: "1vh", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <FeaturedProfile siteName="LinkedIn" defaultImg={LinkedInLogoDef} hoverImg={LinkedInLogo} profileURL="https://www.linkedin.com/in/thomasrones/" />
          <FeaturedProfile siteName="Pluralsight" defaultImg={PluralsightLogoDef} hoverImg={PluralsightLogo} profileURL="https://app.pluralsight.com/profile/thomas-rones" />
        </div>
        <ProfileList />
        <br></br>
        {/* Tabs Layout */}
        {/* <TabContainer/> */}
        
        {/* Basic Layout */}
        <WorkSamplesBasic />
        <br></br>
        <YoutubeUI />
      </div>
      <br></br>

      <footer style={{ display: 'none' }}>
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </footer>
    </div >
  );
}

export default App;

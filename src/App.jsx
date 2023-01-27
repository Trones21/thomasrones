import React from 'react';
import './css/App.css';

import LinkedInLogo from './images/profileLogos/linkedin.png';
import PluralsightLogo from './images/profileLogos/pluralsight.png';
import LinkedInLogoDef from './images/profileLogos/linkedinDef.png';
import PluralsightLogoDef from './images/profileLogos/pluralsightDef.png';

import FeaturedProfile from './components/FeaturedProfile';
import ProfileLists from './components/ProfileLists';
import Projects_Layout1 from './components/Projects_Layout1';
import YoutubeUI from './components/YoutubeUI';
import TabContainer from './components/TabContainer';
import QuoteRotator from './components/QuoteRotator';
import PictureLayout from './components/PictureLayout';
import LayoutSwitcher from './components/LayoutSwitcher';

const AppStyle = { 
  margin: '0 auto'
}

function App() {
  console.log("B:" + process.env.REACT_APP_YTAPIKEY)

  return (
    <div className="App">
      <div style={AppStyle}>
        <br></br>
        {/* <LayoutSwitcher /> */}
       <PictureLayout />
       
        <div style={{ padding: "1vh" }}>
          <p style={{ fontSize: "40px", margin: "5px" }}>Thomas Rones</p>
          <p style={{ margin: "10px" }}>Software Engineering</p> {/*😂*/}
          <QuoteRotator/>
        </div>
        <div>
        <h3 style={{marginTop:'20px',
        marginBottom:'10px'}}>
            Profiles:
        </h3>
        {/* This is a pill that will switch the profiles to  */}
        {/* <button>View by: Category / Featured/Other </button> */}
        </div>
        
        <div style={{ padding: "1vh", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <FeaturedProfile siteName="LinkedIn" defaultImg={LinkedInLogoDef} hoverImg={LinkedInLogo} profileURL="https://www.linkedin.com/in/thomasrones/" />
          <FeaturedProfile siteName="Pluralsight" defaultImg={PluralsightLogoDef} hoverImg={PluralsightLogo} profileURL="https://app.pluralsight.com/profile/thomas-rones" />
        </div>
        <ProfileLists />
        {/* <Freelancing/> */}
        <br></br>
        {/* Tabs Layout */}
        {/* <TabContainer/> */}
        
        {/* Basic Layout */}
        <Projects_Layout1/>
        
        <br></br>
        {/* <YoutubeUI /> */}
      </div>
      <br></br>

      <footer style={{ display: 'none' }}>
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </footer>
    </div >
  );
}

export default App;

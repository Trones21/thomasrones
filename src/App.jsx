import React from 'react';
import './css/App.css';
import headshot from './images/headshot.png';
import exclamation from './images/exclamation-sign.png';
import FeaturedProfile from './components/FeaturedProfile';
import ProfileList from './components/ProfileList';
import Project from './components/Project';
import LinkedInLogo from './images/linkedin.png';
import PluralsightLogo from './images/pluralsight.png';
import LinkedInLogoDef from './images/linkedinDef.png';
import PluralsightLogoDef from './images/pluralsightDef.png';

const PicStyle = {
  height:"20vh",
  borderRadius: '50%'
}

const AppStyle = {
  margin: '0 auto',
  //height: '400px',
  //width: '400px'
}

function App() {
  return (
    <div className="App">
      <div style={AppStyle}>
      <br></br>
        <div>
          <img src={headshot} alt="Me" style={PicStyle}></img>
        </div>
        <div style={{ padding: "1vh" }}>
          <p style={{ fontSize: "40px", margin: "5px" }}>Thomas Rones</p>
          {/* <p style={{ margin: "10px" }}>"Frontend, Backend, Leftend, Rightend 😂"</p> */}
        </div>
        <div style={{ padding: "1vh", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <FeaturedProfile siteName="LinkedIn" defaultImg={LinkedInLogoDef} hoverImg={LinkedInLogo} profileURL="https://www.linkedin.com/in/thomasrones/" />
          <FeaturedProfile siteName="Pluralsight" defaultImg={PluralsightLogoDef} hoverImg={PluralsightLogo} profileURL="https://app.pluralsight.com/profile/thomas-rones" />
        </div>
        <ProfileList />
        <br></br>
        <div>
          <div style={{margin:"4px"}}>
            Finished Projects:
        </div>
          <div className="projectList">
            <Project
              Name="Unpivot SQL"
              Description="An app that generates SQL to unpivot tables (columns to rows)"
              githubURL="https://github.com/Trones21/pivot-via-union"
              siteURL="https://unpivot-sql.com/"
            />
            <Project
              Name="Domaining Toolset"
              Description="Tools & Resources for Domainers"
              githubURL=""
              siteURL= "" /*"https://domainingtoolset.com/"*/
              />
          </div>
          <div style={{margin:"4px"}}>
          Work In Progress:
          </div>
        <div className="projectList">
            <Project
              Name="RainDropz"
              Description="A association based game for learning"
              githubURL="https://github.com/Trones21/Raindropz_JS"
              siteURL="" />
            <Project
              Name="Envato Scraper"
              Description="Scrapes data from the Envato marketplace"
              githubURL="https://github.com/Trones21/Envato-Scraper"
              siteURL="" />
            <Project
              Name="Restful Testing"
              Description="Create tests for REST API endpoints"
              githubURL="https://github.com/Trones21/RESTful_Testing"
              siteURL="https://restfultesting.com/" />
          </div>
        </div>
      </div>
      <br></br>
      <footer style={{ display: 'none' }}>
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </footer>
    </div >
  );
}

export default App;

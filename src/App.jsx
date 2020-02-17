import React from 'react';
import './css/App.css';
import headshot from './images/headshot.png';
import exclamation from './images/exclamation-sign.png';
import FeaturedProfile from './components/FeaturedProfile';
import ProfileList from './components/ProfileList';
import Project from './components/Project';
import LinkedInLogo from './images/linkedin.png';
import PluralsightLogo from './images/pluralsight.png';


const PicStyle = {
  borderRadius: '50%'
}

const AppStyle = {
  margin: '0 auto',
  //height: '400px',
  //width: '400px'
}

const tooltip = {

}

function App() {
  return (
    <div className="App">
      <div style={{ width: '70%' }}>
        <div className={tooltip}>
          <img src={exclamation} alt="icon" style={{ float: 'right' }}></img>
        </div>
      </div>
      <div style={AppStyle}>
        <div>
          <img src={headshot} alt="Me" style={PicStyle}></img>
        </div>
        Thomas Rones
        <FeaturedProfile siteName="LinkedIn" img={LinkedInLogo}/>
        <FeaturedProfile siteName="Pluralsight" img={PluralsightLogo}/>
        <ProfileList />
        <br></br>
        {/* (See my Work Component) */}

        Finished Projects:
        <Project 
        githubURL= "https://github.com/Trones21/pivot-via-union"
        siteURL="https://unpivot-sql.com/" /> 
        <Project 
        githubURL= ""
        siteURL="https://domainingtoolset.com/" />

        Work In Progress:
        <Project 
        githubURL= "https://github.com/Trones21/Raindropz_JS"
        siteURL="" />
        <Project 
        githubURL= "https://github.com/Trones21/Envato-Scraper"
        siteURL="" />
        <Project 
        githubURL= "https://github.com/Trones21/RESTful_Testing"
        siteURL="https://restfultesting.com/" />

      </div>

      <footer style={{ display: 'none' }}>
        <div>Icons made by from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div >
  );
}

export default App;

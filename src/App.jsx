import React from 'react';
import './App.css';
import headshot from './images/headshot.png';
import exclamation from './images/exclamation-sign.png';
import FeaturedProfile from './FeaturedProfile';
import ProfileList from './ProfileList';

const PicStyle = {
  borderRadius: '50%'
}

const AppStyle = {
  margin: '0 auto',
  height: '400px',
  //width: '400px'
}

const tooltip = {

}

function App() {
  return (
    <div className="App">
      <div style={{ width: '60%' }}>
        <div className={tooltip}>
          <img src={exclamation} alt="icon" style={{ float: 'right' }}></img>
        </div>
      </div>
      <div style={AppStyle}>
        <div>
          <img src={headshot} alt="Me" style={PicStyle}></img>
        </div>
        <FeaturedProfile />
        <FeaturedProfile />
        <ProfileList />
      </div>

      <footer style={{ display: 'none' }}>
        <div>Icons made by from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div >
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import headshot from '../images/headshot.png';
import bgPic from '../images/hs1bw-bgRemoved.png';



const PicStyle = {
    height: "20vh",
    // borderRadius: '50%',
  }
  
  const BgPicStyle = {
    height: "150vh",
    position: "fixed",
    opacity: ".5",
    zIndex: "1"
  }

  const PictureLayout = () => {
    const { width } = useViewport();
    const breakpoint = 940;
  
    return width < breakpoint ? <img src={headshot} alt="Me" style={PicStyle}></img> : <img src={bgPic} alt="Me" style={BgPicStyle}></img>;
  }

  const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    // Return the width so we can use it in our components
    return { width };
  }

  export default PictureLayout;
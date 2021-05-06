import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GithubLogo from '../images/github.png';
import websiteLogo from '../images/websiteLogo.png';
import infoLogo from '../images/info.png';
import "../css/tooltip.css";
import "../css/project.css";
import awsIcon from  '../images/cloudServicesIcons/aws.png'

Project.propTypes = {
    Name: PropTypes.string,
    Description: PropTypes.string,
    githubIsPrivate: PropTypes.bool,
    githubURL: PropTypes.string,
    siteURL: PropTypes.string,
    TechStack: PropTypes.array
    //CloudServices: Can take an Array of images or a string of Text
}
let hoveredStyle;

function Project(props) {
    const [showIcons, setShowIcons] = useState(false);

    const hasURL = (propName) => {
        if (propName.startsWith("http")) {
            return true;
        }
    };

    const handleMouseEnter = (element) => {
        setShowIcons(true)
        hoveredStyle = {}
    }

    const handleMouseLeave = (element) => {
        setShowIcons(false)
        hoveredStyle = {}
    }

    let siteIcon;
    let githubIcon;


    if (hasURL(props.siteURL)) {
        siteIcon =
            <a
                className="icon"
                href={props.siteURL}
                target="_blank"
                rel="noopener noreferrer"
            > <img style={{ height: "32px" }} src={websiteLogo} alt="Img"></img>
            </a>
    } 
    if (hasURL(props.githubURL)) {
        githubIcon =
            <a
                className="icon"
                href={props.githubURL}
                target="_blank"
                rel="noopener noreferrer"
            > <img style={{ height: "32px" }} src={GithubLogo} alt="Img"></img>
            </a>
        
    } 

    return (
        <>
            <div className="project"
                style={hoveredStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {showIcons ?
                    <>
                        <div className="projectTitleHovered">
                            {props.Name}
                        </div>
                        <div className="icons iconsMobile"
                        >
                            {siteIcon}
                            {githubIcon}
                            <div
                                className="icon tooltip"  
                                >
                                   <div className="tooltiptextBox">
                                       <p style={{margin: "4%"}}><b>{props.Name}:</b></p>
                                       <p style={{margin: "2%"}}>{props.Description}</p>
                                       
                                       <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center"}}>
                                       <p style={{maxWidth:"15%", margin:"2% 5%"}}><b>Tech Stack</b></p>
                                       {(props.TechStack)? props.TechStack.map( i => <img src={i} style={{maxWidth:"15%", margin:"2% 3% 4% 3%" }}></img>): "ToDo: Fix Me!!!" }
                                       </div>
                                       
                                       <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center"}}>                                     
                                       <img style={{maxWidth:"15%", margin:"2% 5%"}} src={awsIcon}></img>
                                       {(Array.isArray(props.CloudServices))?
                                       props.CloudServices.map( i => <img src={i} style={{maxWidth:"15%", margin:"2% 3% 4% 3%" }}></img>):props.CloudServices}
                                       </div>
                                       
                                    </div>
                                <img style={{ height: "32px" }} src={infoLogo} alt="Img"></img>
                                
                            </div>
                        </div>
                    </>
                    :
                    <div className="projectTitle">
                        {props.Name}
                    </div>
                }
            </div>
        </>
    );
}

export default Project;

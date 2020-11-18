import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GithubLogo from '../images/github.png';
import websiteLogo from '../images/websiteLogo.png';
import infoLogo from '../images/info.png';
import "../css/tooltip.css";
import "../css/project.css";

Project.propTypes = {
    Name: PropTypes.string,
    Description: PropTypes.string,
    githubIsPrivate: PropTypes.bool,
    githubURL: PropTypes.string,
    siteURL: PropTypes.string,

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
                                   <div className="tooltiptext">
                                       <p><b>{props.Name}:</b></p>
                                       <p>{props.Description}</p>
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

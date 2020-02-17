import React from 'react';
import PropTypes from 'prop-types';

Project.propTypes = {

    githubURL: PropTypes.string,
    siteURL: PropTypes.string,

}

function Project(props){
    
    return (
        <>
            <div>
                {props.githubURL}
            </div>
            <div>
                {props.siteURL}
            </div>
        </>
    );
}

export default Project;

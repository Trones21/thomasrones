import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../css/tab.css";



function Tab(props){
    return (
        <button className='tab' onClick={props.componentSwitch}>
            {props.text}
</button>
    )
        
};

export default Tab;
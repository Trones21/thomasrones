import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../css/tabContainer.css";
import Tab from './Tab'
import YoutubeUI from './YoutubeUI';
import Projects_Layout1 from './Projects_Layout1';


const tabNames = ['Summary', 'Projects','Youtube', 'Scraping/DataViz']

function TabContainer(props){
    const [shownComponent, setshownComponent] = useState([]);
   function componentSwitch(componentKey){
     console.log(componentKey);
     switch(componentKey){
         case 'Summary':
            setshownComponent("This is a Summary component I need to build")
         break;
        case 'Projects':
            setshownComponent(<Projects_Layout1 />)
        break;
        case 'Youtube':
            setshownComponent(<YoutubeUI/>)
            break;
        case'Scraping/DataViz':
            setshownComponent('Dataviz component for Glassdoor Scrape');
            break;
         default:
        break;

     }
   }


    let tabs = []
    for(let tab of tabNames){
       tabs.push(<Tab text={tab} componentSwitch={e => componentSwitch(tab)}/>)
    }
    
    

    return (
        <>
        <div className='tabContainer'>
        {tabs}
        </div>
        <div>
        {shownComponent}
        </div>
</>
    )
        
};

export default TabContainer;
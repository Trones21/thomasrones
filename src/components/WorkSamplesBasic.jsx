import * as React from 'react';
import Project from './Project';
import '../css/project.css';

/* Tech/Stack Icons */
import tableauIcon from '../images/techStackIcons/tableau.png'
import sqlIcon from '../images/techStackIcons/sql.png'
import angularIcon from '../images/techStackIcons/angular.png'
import reactIcon from '../images/techStackIcons/react.png'
import javaScriptIcon from '../images/techStackIcons/javaScript.png'
import typeScriptIcon from '../images/techStackIcons/typeScript.png'

/*AWS Icons*/
import awsIcon from  '../images/cloudServicesIcons/aws.png'

import s3 from '../images/cloudServicesIcons/s3.png'
import route53 from '../images/cloudServicesIcons/route53.png'
import cloudfront from '../images/cloudServicesIcons/cloudfront.png'

//May convert to projectList components and pass predefined json...
//Note styling will not work correctly if there are more than 3 elements in a row
const WorkSamplesBasic = () => {

    return (
    <>
    <h3 style={{marginTop:'20px',
        marginBottom:'10px'}}>
            Projects:
    </h3>
    <div style={{display:'flex', justifyContent:'center'}}>
    <p className="projectsFootnote projNoteMobile"> *These are just a few of my projects which have an MVP deployed. See Github for more projects & Resume for current projects</p>
    </div>
    <div className='workSamples'>
        <div className="projectList">
        <Project
            Name="CSV Helper"
            Description="JavaScript library & site with various JSON & CSV tools"
            githubURL="https://github.com/Trones21/csv-helper"
            siteURL="https://csv-helper.com"
            TechStack={[javaScriptIcon]}
            CloudServices={[s3, route53, cloudfront]} /> 
          <Project
            Name="DB Data Quality"
            Description="SQL scripts for creating data quality tables and accompanying Tableau Dashboards for analysis"
            githubURL="https://github.com/Trones21/sql-data-quality"
            siteURL=""
            TechStack={[tableauIcon, sqlIcon]} /> 
          <Project
            Name="Domaining Toolset"
            Description="Tools & Resources for Domainers"
            githubURL="https://github.com/Trones21/DomainingToolset"
            siteURL="https://domainingtoolset.com/"
            TechStack={[typeScriptIcon]}
            CloudServices={[s3, route53, cloudfront]}
          /> 
      </div>
         <div className="projectList">
         <Project
          Name="React Portfolio Website"
          Description="This site! The React project can easily be modified for your own profile."
          githubURL="https://github.com/Trones21/thomasrones"
          siteURL=""
          TechStack={[reactIcon]}
          CloudServices={[s3, route53, cloudfront]}
        />
                  <Project
            Name="Unpivot SQL"
            Description="An app that generates SQL to unpivot tables (columns to rows)"
            githubURL="https://github.com/Trones21/pivot-via-union"
            siteURL="https://unpivot-sql.com/"
            TechStack={[reactIcon]}
            CloudServices={[s3, route53, cloudfront]}
          />
         </div>
        </div>

      </>
    );
};

export default WorkSamplesBasic;
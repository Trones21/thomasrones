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
import goIcon from '../images/techStackIcons/go.png'
import mysqlIcon from '../images/techStackIcons/mySQL.png'

/*AWS Icons*/
import awsIcon from  '../images/cloudServicesIcons/aws.png'
import s3 from '../images/cloudServicesIcons/s3.png'
import route53 from '../images/cloudServicesIcons/route53.png'
import cloudfront from '../images/cloudServicesIcons/cloudfront.png'

//May convert to projectList components and pass predefined json...
//Note styling will not work correctly if there are more than 3 elements in a row
const Projects_Layout1 = () => {

    return (
    <>
    <h3 style={{marginTop:'20px',
        marginBottom:'10px'}}>
            Projects:
    </h3>
    <div style={{display:'flex', justifyContent:'center'}}>
    <p className="projectsFootnote projNoteMobile"> 
    *These are just a <b>few</b> of my personal projects (not work for clients). 
    *I've chosen these projects to showcase differences in both the underlying tech and the project stage (some are just at the MVP stage, others are quite mature). 
    *See Github for more projects & Resume for current projects</p>
    </div>
    <div className='workSamples'>
        <div className="projectList">
        <Project
            Name="CSV Helper"
            Description="Site with JSON/CSV conversion, tools, etc."
            githubURL="https://github.com/Trones21/csv-helper"
            siteURL="https://csv-helper.com"
            TechStack={[javaScriptIcon]}
            CloudServices={[s3, route53, cloudfront]} /> 
          <Project
            Name="DB Data Quality"
            Description="SQL scripts for creating data quality tables and accompanying Tableau Dashboards for analysis"
            githubURL="https://github.com/Trones21/sql-data-quality"
            siteURL=""
            TechStack={[tableauIcon, sqlIcon]}
            CloudServices= "No cloud services used" /> 

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
            <Project
            Name="Numonix"
            Description="The imdb of Mnemonics"
            githubURL="https://github.com/Trones21/mnemonics"
            siteURL=""
            TechStack={[angularIcon, goIcon, mysqlIcon]}
            CloudServices= "Haven't finished/deployed MVP yet"/> 
         </div>
        </div>

      </>
    );
};

export default Projects_Layout1;

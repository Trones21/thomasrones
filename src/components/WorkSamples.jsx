import * as React from 'react';
import Project from './Project';

//May convert to projectList components and pass predefined json...

const WorkSamples = () => {
    return (
    <>
    <h3 style={{marginTop:'20px',
        marginBottom:'10px'}}>
            Projects:
    </h3>
    <div className='workSamples'>
        <div style={{ margin: "4px" }}>
          Finished (MVP Deployed):
      </div>
        <div className="projectList">
          <Project
            Name="Unpivot SQL"
            Description="An app that generates SQL to unpivot tables (columns to rows)"
            githubURL="https://github.com/Trones21/pivot-via-union"
            siteURL="https://unpivot-sql.com/"
          />
          <Project
            Name="SQL Data Quality"
            Description="SQL scripts for creating data quality tables and accompanying Tableau Dashboards for data analysis"
            githubURL="https://github.com/Trones21/sql-data-quality"
            siteURL="" />

        </div>
        <div style={{ margin: "4px" }}>
          Work In Progress (Active):
        </div>
        <div className="projectList">
          <Project
            Name="RainDropz"
            Description="A association based game for learning"
            githubURL="https://github.com/Trones21/Raindropz_JS"
            siteURL="" />

          <Project
            Name="Fluent Through Music"
            Description="Learn new languages by interactively listening to music"
            githubURL="https://github.com/Trones21/fluent-through-music"
            siteURL="" />

          <Project
            Name="Domaining Toolset"
            Description="Tools & Resources for Domainers"
            githubURL=""
            siteURL="" /*"https://domainingtoolset.com/"*/
          />
        </div>
        <div style={{ margin: "4px" }}>
          Work In Progress (Inactive):
        </div>
        <div className="projectList">
          <Project
            Name="Restful Testing"
            Description="Create tests for REST API endpoints"
            githubURL="https://github.com/Trones21/RESTful_Testing"
            siteURL=""  //"https://restfultesting.com/" 
          />
          <Project
            Name="Envato Scraper"
            Description="Scrapes data from the Envato marketplace"
            githubURL="https://github.com/Trones21/Envato-Scraper"
            siteURL="" />
        </div>
      </div>
      </>
    );
};

export default WorkSamples;
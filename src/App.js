import React, { Component } from 'react';
import logo from './logo.svg';
import PortfolioFixed from './components/PortfolioFixed';
import PortfolioContent from './components/PortfolioContent';
import {skills, eduList, jobsList, projectData} from './data/datasource.js';

class App extends Component {
  render() {
    /*console.log(skills);
    console.log(eduList)
    console.log(jobsList)
    console.log(projectData);*/
    return (
      <div className="App" id="app-container">
        <PortfolioFixed/>
        <PortfolioContent skills={skills} eduList={eduList} jobList={jobsList} projectData={projectData}/>
      </div>
    );
  }
}

export default App;

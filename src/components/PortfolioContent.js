import React, { Component } from 'react';
import Header from './content/Header';
import Sumary from './content/Sumary';
import ContactInfo from './content/ContactInfo';
import Profile from './Profile';
import ShowHideTech from './Technologies/ShowHideTech';
import FilterProjects from './Projects/FilterProjects';

class PortfolioContent extends Component {
    render() {
        console.log(this.props.projectData);
        return (
            <div className="portfolio-content">
                <Header/>
                <Sumary/>
                <ContactInfo/>
                <Profile sk={this.props.skills} edu={this.props.eduList} job={this.props.jobList}/>
                <ShowHideTech/>
                <FilterProjects data={this.props.projectData}/>
            </div>
        )
    }
}

export default PortfolioContent;
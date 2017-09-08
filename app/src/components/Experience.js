import React from 'react';
import Experiencese from '../helpers/Experiencese';
import MediaQuery from 'react-responsive';
import _ from 'lodash';

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: 2017,
      events: [],
    };

    this.onChageYear = this.onChageYear.bind(this);
    this.renderTimelineList = this.renderTimelineList.bind(this);
  }

  onChageYear(newYear) {
    const { year } = this.state;
    let events = this.renderTimelineList(Experiencese,newYear);
    if(newYear !== year) {
      this.setState({
        year: newYear,
        events: events,
      });
    }
  }

  renderTimelineList(experiencese, year) {
    console.log('render time list');
    return _.map(experiencese[`${year}`], (event) => {
      output.push(
        <li className="experience-timeline-item" key={i}>
          <div className="experience-timeline-item-info">
            <span>{event.date}</span>
          </div>
          <div className="experience-timeline-item-marker"></div>
          <div className="experience-timeline-item-content">
            <h3 className="experience-timeline-item-content-title">{event.title}</h3>
            <p className="experience-timeline-item-content-detail">{event.detail}</p>
          </div>
        </li>
      );
    });
  }

  render() {
    const {year, events} = this.state;
    return (
      <section className="experience-container">
        <ul className="experience-selectbar">
          <li onClick={this.onChageYear.bind(this, 2017)}>2017</li>
          <li onClick={this.onChageYear.bind(this, 2016)}>2016</li>
          <li onClick={this.onChageYear.bind(this, 2015)}>2015</li>
        </ul>
        <ul className="experience-timeline timeline-split">
        { events }
        </ul>
      </section>
    );
  }
}

export default Experience;

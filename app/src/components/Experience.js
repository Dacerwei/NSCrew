import React from 'react';
import Experiencese from '../helpers/Experiencese';
import MediaQuery from 'react-responsive';
import _ from 'lodash';

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.renderTimelineList = this.renderTimelineList.bind(this);
  }

  renderTimelineList(experiencese, year) {
    console.log(experiencese);
    console.log(year);
    let output = [];
    output.push(
      <li className="experience-timeline-item period" key={year}>
        <div className="experience-timeline-item-info"></div>
        <div className="experience-timeline-item-marker"></div>
        <div className="experience-timeline-item-content">
          <h2 className="experience-timeline-item-content-title">{year}</h2>
        </div>
      </li>
    );
    return _.reduce(experiencese.events, (acc, event, i) => {
      acc.push(
        <li className="experience-timeline-item" key={ `${year}-${i}`}>
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
      return acc;
    }, output);
  }

  render() {
    return (
      <section className="experience-container">
        <ul className="experience-timeline timeline-split">
        {
          this.renderTimelineList(_.find(Experiencese, (exp) => {return exp.year === 2017}), 2017)
        }
        </ul>
        <ul className="experience-timeline timeline-split">
        {
          this.renderTimelineList(_.find(Experiencese, (exp) => {return exp.year === 2016}), 2016)
        }
        </ul>
        <MediaQuery query='(min-width: 1024px)'>
          <ul className="experience-timeline timeline-split">
          {
            this.renderTimelineList(_.find(Experiencese, (exp) => {return exp.year === 2015}), 2015)
          }
          </ul>
        </MediaQuery>
      </section>
    );
  }
}

export default Experience;

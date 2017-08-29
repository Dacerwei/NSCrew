import React from 'react';
import Experiencese from '../helpers/Experiencese';
import _ from 'lodash';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }

    this.renderTimelineList = this.renderTimelineList.bind(this);
  }

  renderTimelineList(experiencese) {
    return _.reduce(experiencese, (acc, experience, i) => {
      acc.push(
        <li className="experience-timeline-item period" key={i}>
          <div className="experience-timeline-item-info"></div>
          <div className="experience-timeline-item-marker"></div>
          <div className="experience-timeline-item-content">
            <h2 className="experience-timeline-item-content-title">{experience.year}</h2>
          </div>
        </li>
      );
      _.reduce(experience.events, (acc, event, j) =>{
        acc.push(
          <li className="experience-timeline-item" key={ `${i}-${j}`}>
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
      }, acc);
      return acc;
    },[]);
  }

  render() {
    return (
      <section className="experience-container">
        <ul className="experience-timeline timeline-split">
        {
          this.renderTimelineList(Experiencese)
        }
        </ul>
      </section>
    );
  }
}

export default Experience;

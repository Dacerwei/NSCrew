import React from 'react';
import Experiencese from '../helpers/Experiencese';
import _ from 'lodash';

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.renderTimelineList = this.renderTimelineList.bind(this);
  }

  renderTimelineList(events){
    let output = [];
    for (let i=0; i<events.length; i++) {
      output.push(
        <li className="experience-timeline-item period" key={i}>
          <div className="experience-timeline-item-info"></div>
          <div className="experience-timeline-item-marker"></div>
          <div className="experience-timeline-item-content">
            <h2 className="experience-timeline-item-content-title">{events[i].year}</h2>
          </div>
        </li>
      );
      let yearEvents = events[i].events;
      for (let j=0; j<yearEvents.length; j++) {
        output.push(
          <li className="experience-timeline-item" key={ `${i}-${j}`}>
            <div className="experience-timeline-item-info">
              <span>{yearEvents[j].date}</span>
            </div>
            <div className="experience-timeline-item-marker"></div>
            <div className="experience-timeline-item-content">
              <h3 className="experience-timeline-item-content-title">{yearEvents[j].title}</h3>
              <p className="experience-timeline-item-content-detail">{yearEvents[j].detail}</p>
            </div>
          </li>
        );
      }
    }

    return output;
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

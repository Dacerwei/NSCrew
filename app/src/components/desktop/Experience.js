import React from 'react';
import Experiencese from '../../helpers/Experiencese';
import _ from 'lodash';

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: null,
      events: [],
    };

    this.onChageYear = this.onChageYear.bind(this);
    this.updateTimeline = this.updateTimeline.bind(this);
  }

  componentDidMount() {
    let defaultYear = (new Date()).getFullYear();
    let defaultEvents = this.updateTimeline(Experiencese[defaultYear]);
    this.setState({
      year: defaultYear,
      events: defaultEvents,
    });
  }

  onChageYear(newYear) {
    const { year } = this.state;
    let events = this.updateTimeline(Experiencese[newYear]);
    if(newYear !== year) {
      this.setState({
        year: newYear,
        events: events,
      });
    }
  }

  updateTimeline(experiencese) {
    return _.reduce(experiencese, (acc, event, i) => {
      acc.push(
        <li className="experience-timeline-item" key={i}>
          <div className="experience-timeline-item-info">
            <span><h3 className="experience-timeline-item-content-title">{event.date} - {event.title}</h3></span>
          </div>
        </li>
      );
      return  acc;
    }, []);
  }

  render() {
    const {year, events} = this.state;
    return (
      <section className="experience-container">
        <div className="experience-selectbar">
          <div className="experience-selectbar-yearitem" onClick={this.onChageYear.bind(this, 2017)}><h3>2017</h3></div>
          <div className="experience-selectbar-yearitem" onClick={this.onChageYear.bind(this, 2016)}><h3>2016</h3></div>
          <div className="experience-selectbar-yearitem" onClick={this.onChageYear.bind(this, 2015)}><h3>2015</h3></div>
        </div>
        <ul className="experience-timeline timeline-split">
        { events }
        </ul>
      </section>
    );
  }
}

export default Experience;

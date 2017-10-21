import React from 'react';
import Experiencese from '../../helpers/Experiencese';
import _ from 'lodash';
import Classnames from 'classnames';

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: (new Date()).getFullYear(),
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
            <span>
            <h3 className="experience-timeline-item-content-date">{event.date}</h3>
            <h3 className="experience-timeline-item-content-title">{event.title}</h3>
            </span>
          </div>
        </li>
      );
      return  acc;
    }, []);
  }

  render() {
    const { events, year } = this.state;
    const years = [2017, 2016, 2015];

    return (
      <section className="experience-container">
        <div className="experience-selectbar">
        {
          _.map(years, (currentYear) => {
            let btnClass = Classnames({
             'experience-selectbar-yearitem': true,
             'yearitem-active': currentYear === year,
            });
            return(
              <div key={currentYear} className={btnClass} onClick={this.onChageYear.bind(this, currentYear)}><h3>{currentYear}</h3></div>
            );
          })
        }
        </div>
        <ul className="experience-timeline timeline-split">
        { events }
        </ul>
      </section>
    );
  }
}

export default Experience;

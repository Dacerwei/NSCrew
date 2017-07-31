import React from 'react';
import qs from 'qs';
require('es6-promise').polyfill();

const GOOGLE_API_KEY = 'AIzaSyBjXUGkrRwgKE8ljzUWXqUij1HJZ2E-o1o';
const GOGOLE_CALENDAR_URL ='https://www.googleapis.com/calendar/v3/calendars/kb7aadhupajqgcln6i4kndv24o@group.calendar.google.com/events';

export default class EventsCalendar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			eventList: [],
		};

		this.request = this.request.bind(this);
	}

	componentDidMount() {
		const URL = GOGOLE_CALENDAR_URL + '?' + qs.stringify({
			key: GOOGLE_API_KEY
		});

		let {eventList} = this.state;

		this.request(URL).then((resp) => {
			if(resp.items){
				return resp.items
			} else {
				throw 'no events';
			}
		}).then((resp) => {
			resp.map((event) => {
				eventList.push(
				<li className="eventlist-irregular-event-item" key={event.id}>
					<h1 className="eventlist-irregular-event-item-title">{event.summary}</h1>
					<p className="eventlist-irregular-event-item-time">{event.start[Object.keys(event.start)[0]]}</p>
					<p className="eventlist-irregular-event-item-time">{event.end[Object.keys(event.end)[0]]}</p>
				</li>
				);
			});
			this.setState({
				eventList: eventList,
			});
		}).catch((err) => {
			console.log(err);
		});
	}

	request(url) {
		return fetch(url).then((resp) => {
			let contentType = resp.headers.get('content-type');
			if (contentType && contentType.indexOf('application/json') !== -1) {
				return resp.json();
			} else {
				return resp.text();
			}
		});
	}

	render() {
		const {eventList} = this.state;
		return(
			<div className='eventlist-irregular-event-container'>
				<h1 className='swingevents-title'>Irregular Swing Events </h1>
				<ul className='eventlist-irregular-event-warpper'>
				{ eventList ? eventList : 'no events' }
				</ul>
			</div>
		);
	}
}
import React from 'react';
import qs from 'qs';
import Request from '../helpers/Request';
import _ from 'lodash';
import Event from './Event';

const GOOGLE_API_KEY = 'AIzaSyBjXUGkrRwgKE8ljzUWXqUij1HJZ2E-o1o';
const GOGOLE_CALENDAR_URL ='https://www.googleapis.com/calendar/v3/calendars/kb7aadhupajqgcln6i4kndv24o@group.calendar.google.com/events';

export default class EventsCalendar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			eventList: [],
		};
	}

	componentDidMount() {
		const URL = GOGOLE_CALENDAR_URL + '?' + qs.stringify({
			key: GOOGLE_API_KEY
		});

		let {eventList} = this.state;

		Request(URL).then((resp) => {
			if(!_.isEmpty(resp.items)){
				return resp.items
			} else {
				throw 'no events';
			}
		}).then((resp) => {
			resp.map((event) => {
				eventList.push( <Event key={event.id} eventObject={event}/>);
			});
			this.setState({
				eventList: eventList,
			});
		}).catch((err) => {
			console.log(err);
		});
	}

	render() {
		const {eventList} = this.state;
		return(
			<div className='eventscalendar-container'>
				<h1 className='eventscalendar-title'>Irregular Swing Events </h1>
				<ul className='eventscalendar-eventlist-warpper'>
				{ eventList ? eventList : 'no events' }
				</ul>
			</div>
		);
	}
}
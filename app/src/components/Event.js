import React from 'react';
import moment from 'moment';
import Paper from 'material-ui/Paper';

const dateParser = (dateTimeObj, type) => {
		if (dateTimeObj['date']) {
			return {
				year: moment(dateTimeObj.date, "YYYY-MM-DD").format('YYYY'),
				month: moment(dateTimeObj.date, "YYYY-MM-DD").format('MMM'),
				date: moment(dateTimeObj.date, "YYYY-MM-DD").format('Do'),
			}
		} else {
			return {
				year: moment(dateTimeObj.dateTime, moment.ISO_8601).format('YYYY'),
				month: moment(dateTimeObj.dateTime, moment.ISO_8601).format('MMM'),
				date: moment(dateTimeObj.dateTime, moment.ISO_8601).format('Do'),
				time: moment(dateTimeObj.dateTime, moment.ISO_8601).format('HH : mm'),
			}
		}
};

export default (props) => {
	const {eventObject} = props;

	let start = dateParser(eventObject.start);
	let end = dateParser(eventObject.end);

	let eventDetails = {
		id: eventObject.id,
		summary: eventObject.summary,
		description: eventObject.description,
		location: eventObject.location,
		htmlLink: eventObject.htmlLink,
		startYear: start.year,
		startMonth: start.month,
		startDate: start.date,
		startTime: start.time || null,
		endYear: end.year,
		endMonth: end.month,
		endDate: end.date,
		endTime: end.time || null,
	};

	return(
		<Paper className="eventlist-irregular-event-item">
			<div className="eventlist-irregular-event-item-date">
				<p className="eventlist-irregular-event-item-startdate-date">{eventDetails.startDate}</p>
				<p className="eventlist-irregular-event-item-startdate-month">{eventDetails.startMonth}</p>
			</div>
			<div className="eventlist-irregular-event-item-info">
				<h1 className="eventlist-irregular-event-item-title">{eventDetails.summary}</h1>
				<p className="eventlist-irregular-event-item-location">{eventDetails.location}</p>
				<p className="eventlist-irregular-event-item-description">{eventDetails.description}</p>
				<p className="eventlist-irregular-event-item-enddate">{eventDetails.endDate} / {eventDetails.startTime} to {eventDetails.endDate} / {eventDetails.endTime} </p>
			</div>
		</Paper>
	);
}
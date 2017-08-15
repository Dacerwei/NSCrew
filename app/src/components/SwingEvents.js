import React from 'react';
import EventsCalendar from './EventsCalendar';

class SwingEvents extends React.Component {
	render(){
		return (
			<div className='swingevents-container'>
				<div className='swingevents-regular-events-wrapper'>
					<h1 className='swingevents-regular-events-title'>Regular Social Party </h1>
					<ul className='swingevents-regular-events-list'>
						<li className='swingevents-regular-events-list-item'>Tuesday: 20:00 - 22:00 @ 1914華山文創園區</li>
						<li className='swingevents-regular-events-list-item'>Friday:  20:00 - 24:00 @ Corazon</li>
						<li className='swingevents-regular-events-list-item'>Friday:  20:00 - 23:00 @ 1914華山文創園區</li>
						<li className='swingevents-regular-events-list-item'>Sunday:  16:00 - 18:00 @ 松山文創園</li>
					</ul>
				</div>
				<div className='swingevents-irragular-events-wrapper'>
					<EventsCalendar />
				</div>
			</div>
		);
	}
}

export default SwingEvents;
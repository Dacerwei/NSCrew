import React from 'react';
import '../../assets/styles/swingevents.css';

class SwingEvents extends React.Component {
	render(){
		return (
			<div className='swingevents-container'>
				<h1 className='swingevents-title'>Regular Social Party </h1>
				<ul className='swingevents-list'>
					<li className='swingevents-list-item'>Tuesday: 20:00 - 22:00 @ 1914華山文創園區</li>
					<li className='swingevents-list-item'>Friday:  20:00 - 24:00 @ Corazon</li>
					<li className='swingevents-list-item'>Friday:  20:00 - 23:00 @ 1914華山文創園區</li>
					<li className='swingevents-list-item'>Sunday:  16:00 - 18:00 @ 松山文創園</li>
				</ul>
			</div>
		);
	}
}

export default SwingEvents;
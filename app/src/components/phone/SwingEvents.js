import React from 'react';

class SwingEvents extends React.Component {
	render(){
		return (
			<div className='swingevents-container'>
				<div className="swingevents-highlight-events-wrapper">
					<h1 className="swingevents-highlight-events-title">Coming Soon</h1>
					<iframe
						className="swingevents-highlight-event"
						src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnsintaiwan%2F&tabs=events&width=500&height=441&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=757696621076512" 
						width="500" 
						height="441" 
						style={{
							border: 'none',
							overflow: 'hidden'
						}} 
						scrolling="no" 
						frameBorder="0" 
						allowTransparency="true">
					</iframe>
				</div>
				<div className='swingevents-regular-events-wrapper'>
					<h1 className='swingevents-regular-events-title'>Regular Social Party </h1>
					<ul className='swingevents-regular-events-list'>
						<li className='swingevents-regular-events-list-item'>Tuesday: 20:00 - 22:00 @ 1914華山文創園區</li>
						<li className='swingevents-regular-events-list-item'>Friday:  20:00 - 24:00 @ Corazon</li>
						<li className='swingevents-regular-events-list-item'>Friday:  20:00 - 23:00 @ 1914華山文創園區</li>
						<li className='swingevents-regular-events-list-item'>Sunday:  16:00 - 18:00 @ 松山文創園</li>
					</ul>
				</div>
{/*				<div className='swingevents-irragular-events-wrapper'>
					<EventsCalendar />
				</div>*/}
			</div>
		);
	}
}

export default SwingEvents;
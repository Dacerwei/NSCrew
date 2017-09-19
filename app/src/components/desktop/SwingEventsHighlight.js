import React from 'react';

class SwingEventsHighlight extends React.Component {
	render() {
		return(
			<div className="swingeventshighlight-container">
				<iframe 
					className="swingEeentshighlight-event"
					src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnsintaiwan%2F&tabs=events&width=340&height=351&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=757696621076512" 
					width="340" 
					height="351" 
					style={{
						border:'none',
						overflow:'hidden',
					}} 
					scrolling="no" 
					frameBorder="0" 
					allowTransparency="true">
				</iframe>
			</div>
		);
	}
}

export default SwingEventsHighlight;
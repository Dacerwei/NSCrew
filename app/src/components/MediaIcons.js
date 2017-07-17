import React from 'react';
import FaceBookIcon from 'react-icons/lib/fa/facebook';
import YouTubeIcon from 'react-icons/lib/fa/youtube-play';
import InstagramIcon from 'react-icons/lib/fa/instagram';

const MediaIcons = () => {
	return (
		<div className="icon-bar">
			<a target='_blank' href='https://www.facebook.com/nsintaiwan/'><FaceBookIcon height={'1.5em'} width={'1.5em'} className="icon" /></a>
			<a target='_blank' href='https://www.youtube.com/channel/UCOO0wsdVDe1KXN9t1ND6_Cw'><YouTubeIcon height={'1.5em'} width={'1.5em'} className="icon" /></a>
			<a target='_blank' href='https://www.instagram.com/naughtyswing/'><InstagramIcon height={'1.5em'} width={'1.5em'} className="icon" /></a>
		</div>
	);

};

export default MediaIcons;
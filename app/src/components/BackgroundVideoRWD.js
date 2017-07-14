import React from 'react';
import PropTypes from 'prop-types';

const BackgroundVideoRWD = ({src, width, height, onLoadHandler, onErrorHandler}) => {
	const videoContainerStyle = {
		position: 'fixed',
		top: '50%',
		left: '50%',
		minWidth: '100%',
		minHeight: '100%',
		width: 'auto',
		height: 'auto',
		zIndex: '-100',
		transform: 'translate(-50%, -50%)'
	};
	return (
		<div id="video-container" style={ videoContainerStyle } >
			<video id="background-video" muted loop autoPlay preload>
                <source 
                	width={ width } 
                	height={ height } 
                	src={ src } 
                	onCanPlayThrough={onLoadHandler}
                	type="video/mp4" />
				Your browser does not support the video tag
			</video>
		</div>
	);
};

BackgroundVideoRWD.propTypes = {
	src: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired
};

export default BackgroundVideoRWD;
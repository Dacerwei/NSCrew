import React from 'react';
import nslogo from '../../assets/images/nslogo.png';

class NSLogo extends React.Component {
    render() {
        return (
        	<div className="wrapper">
        		<img id="nslogo" src={nslogo} alt="Naughty Swing"/>
         	</div>
        );
    }
}

export default NSLogo;
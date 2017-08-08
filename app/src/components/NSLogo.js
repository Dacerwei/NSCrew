import React from 'react';
import nslogo from '../../assets/images/header_ns_logo.svg';

class NSLogo extends React.Component {
    render() {
        return (
        	<div className="nslogo-container">
        		<img className='nslogo-img' id="nslogo" src={nslogo} alt="Naughty Swing"/>
         	</div>
        );
    }
}

export default NSLogo;
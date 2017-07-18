import React from 'react';
import PorfolioItemLayout from './PorfolioItemLayout';

const photo_set = [
	{
		src: require('../../assets/images/porfolio_lalaland.jpg'),
		width: 3939,
		height: 2303,
		title: 'La La Land',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1.710
	},
	{
		src: require('../../assets/images/porfolio_wtp.jpg'),
		width: 4608,
		height: 2836,
		title: 'What the Pa!!',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1.625
	},
	{
		src: 'http://www.oldiesmusicblog.com/wp-content/uploads/lindy-hop-1.jpg',
		width: 400,
		height: 426,
		title: 'photo-0',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 0.939
	},
	{
		src:'https://media.giphy.com/media/DokffWww1anAI/giphy.gif',
		width: 344,
		height: 256,
		title: 'photo-1',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1.34
	},
	{
		src: 'http://whitwellstation.com/wp-content/uploads/2015/06/lindyhop-thumb.png',
		width: 730,
		height: 730,
		title: 'photo-2',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1
	},
	{
		src:'https://s-media-cache-ak0.pinimg.com/originals/81/05/ea/8105ea438414ccc7f5f1b441c68e0e68.jpg',
		width: 600,
		height: 359,
		title: 'photo-3',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1.67
	},
	{
		src:'https://media.giphy.com/media/OTc7qAjRWWrYs/giphy.gif',
		width: 160,
		height: 190,
		title: 'photo-4',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 0.84
	},	
	{
		src:'http://www.jaminjackson.com/wp-content/uploads/2015/11/lindy-hop-vintage-clothes-and-moves.jpg',
		width: 832,
		height: 585,
		title: 'photo-5',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1.42
	},
	{
		src:'https://www.shbarcelona.com/blog/en/wp-content/uploads/2016/08/lindy-hop-barcelona.jpg',
		width: 1024,
		height: 683,
		title: 'photo-6',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1.5
	}
];

class Portfolio extends React.Component {
	render(){
		return (
			<div className='porfolio-container' >
				<PorfolioItemLayout photo_set={ photo_set } />
			</div>
		);
	}
}

export default Portfolio;
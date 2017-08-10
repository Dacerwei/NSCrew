import React from 'react';
import PorfolioItemLayout from './PorfolioItemLayout';

const photo_set = [
	{
		ID: 0,
		src: 'https://naughtyswing.blob.core.windows.net/naughtyswing/portfolio_00_lalaland_mini.jpg',
		width: 3939,
		height: 2303,
		title: 'La La Land',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1.710
	},
	{
		ID: 1,
		src: 'https://naughtyswing.blob.core.windows.net/naughtyswing/porfolio_wtp.jpg',
		width: 4608,
		height: 2836,
		title: 'What the Pa!!',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1.625
	},
	{
		ID: 2,
		src: 'https://naughtyswing.blob.core.windows.net/naughtyswing/00-1%E5%93%81%E7%89%8C%E5%90%88%E4%BD%9C.jpg',
		width: 2048,
		height: 1365,
		title: 'Lee Jeans Commercial Shooting',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1.5
	},
	{
		ID: 3,
		src:'https://naughtyswing.blob.core.windows.net/naughtyswing/portfolio_03_goldenhourse_mini.jpg',
		width: 3520,
		height: 2347,
		title: '金馬奇幻影展',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1.499
	},
	{
		ID: 4,
		src: 'https://naughtyswing.blob.core.windows.net/naughtyswing/portfolio_04_solocherletonparty_mini.jpg',
		width: 4240,
		height: 2384,
		title: 'Solo Charleston Party',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1.779
	},
	{
		ID: 5,
		src:'https://naughtyswing.blob.core.windows.net/naughtyswing/porfolio_lalaland.gif',
		width: 400,
		height: 225,
		title: 'La La Land',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1.777
	},
	{
		ID: 6,
		src:'https://naughtyswing.blob.core.windows.net/naughtyswing/02%E6%90%96%E6%93%BA%E8%88%9E%E9%AB%94%E9%A9%97%E6%95%99%E5%AD%B8.jpg',
		width: 4240,
		height: 2384,
		title: 'Taster classes',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1.778
	},	
	{
		ID: 7,
		src:'https://naughtyswing.blob.core.windows.net/naughtyswing/portfolio_07_fisrtdanceinwedding_mini.jpg',
		width: 4240,
		height: 2384,
		title: 'First Dance of Wedding',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1.778
	},
	{
		ID: 8,
		src:'https://naughtyswing.blob.core.windows.net/naughtyswing/porfolio_ximan_on_the_sunny_side.gif',
		width: 400,
		height: 225,
		title: 'On the Westside of Taipei',
		info: "Lobbying is about foresight. About anticipating your opponent's moves and devising counter measures. The winner plots one step ahead of the opposition. And plays her trump card just after they play theirs. It's about making sure you surprise them. And they don't surprise you.",
		aspectRatio: 1.777
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
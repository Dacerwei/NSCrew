import React from 'react';
import CoopBlock from './CoopBlock';
import '../../assets/styles/coop.css';

const CoopSet = [
{
	id: "coop-videoshooting",
	title:"Video Production | 影片拍攝",
	contentPreview: "'A picture says a thousand words.' - while a video shows a thousand images, and nothing's more contagious than a Swing Dance film! No words needed",
	contentReadMore:"we tell stories through jazz music and dance moves, as the chemistry among the dancers says it all. Happen to have something to be promoted through a good story? Tell us now!",
	mediaTitle: "lee-jeans",
	mediaSrc: "https://naughtyswing.blob.core.windows.net/naughtyswing/00-2%E5%BD%B1%E7%89%87Shooting.jpg"
},
{
	id:"coop-performance",
	title: "Swing Dance Showcase | Swing舞蹈演出",
	contentPreview: "There's never too much of a good performance, especially when it comes to social dance!",
	contentReadMore: "Want to add some elements which entertain your audience, invigorate your event and give you all a total enjoyment with profession and passion? We ARE just the one you're looking for!",
	mediaTitle: "ltsdc-lalaland",
	mediaSrc: "https://naughtyswing.blob.core.windows.net/naughtyswing/01%E8%A1%A8%E6%BC%94.jpg"
},
{
	id: "coop-teaching",
	title:"Lesson | 教學課程",
	contentPreview: "Excited but nervous, not sure when and how to step out of your comfort zone and onto the dance floor? Now is the time, and we're here to help you make that happen! ",
	contentReadMore: "With our 10-year experience in dancing and diversified exposure to different dance styles, we understand the problems you may encounter and more important, the methods to overcome explained to you in an interesting and easily understood way!",
	mediaTitle: "當代藝術美術館體驗課程",
	mediaSrc: "https://naughtyswing.blob.core.windows.net/naughtyswing/02%E6%90%96%E6%93%BA%E8%88%9E%E9%AB%94%E9%A9%97%E6%95%99%E5%AD%B8.jpg"
}
];

const Cooperative = () => {

	let CoopBlockSet = [];

	for(var i=0; i < CoopSet.length; i++){
		CoopBlockSet.push(
			<CoopBlock
				key = { CoopSet[i].id }
				id = { CoopSet[i].id }
				title= { CoopSet[i].title }
				contentPreview = { CoopSet[i].contentPreview }
				contentReadMore = { CoopSet[i].contentReadMore }
				mediaTitle = { CoopSet[i].mediaTitle }
				mediaSrc= { CoopSet[i].mediaSrc }
			/>
		);
	}

	return (
		<div className='coop-container'>
			<div className="coop-introducion-wrapper">
				<p>More than just a dance crew - Naughty Swing specializes in Swing Dance choreography, 
				teaching and performance as well as video filming and editing. If you're amazed by the beauty of 
				Swing Dance, why not pick some options below and work with us now!</p>
			</div>
			<div className="coop-sections-wrapper">
				{ CoopBlockSet }
			</div>
		</div>
	);
};

export default Cooperative;
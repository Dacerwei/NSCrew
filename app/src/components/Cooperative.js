import React from 'react';
import CoopBlock from './CoopBlock';
import '../../assets/styles/coop.css';

const CoopSet = [
{
	id:"coop-performance",
	title: "Performance | 表演",
	contentPreview: "好得舞蹈表演永遠不嫌少！透過搖擺舞、爵士樂，與Naughty Swing專業的演出能力，為你的記者會、舞會等活動增添美麗與歡樂的色彩！",
	contentReadMore: " There's never too much of a good performance, especially when it comes to social dance! Want to add some elements which entertain your audience, invigorate your event and give you all a total enjoyment with profession and passion? We ARE just the one you're looking for!",
	mediaTitle: "ltsdc-lalaland",
	mediaSrc: "https://naughtyswing.blob.core.windows.net/naughtyswing/01%E8%A1%A8%E6%BC%94.jpg"
},
{
	id: "coop-videoshooting",
	title:"Video Production | 影片",
	contentPreview: "影片所能傳遞的訊息勝過千言萬語，更遑論透過搖擺舞的影片拍攝，將肢體語言的豐富情感傳達至舞蹈影片中，帶領觀眾一同進步故事裡！",
	contentReadMore:"'A picture says a thousand words.' - while a video shows a thousand images, and nothing's more contagious than a Swing Dance film! No words needed! we tell stories through jazz music and dance moves, as the chemistry among the dancers says it all. Happen to have something to be promoted through a good story? Tell us now!",
	mediaTitle: "lee-jeans",
	mediaSrc: "https://naughtyswing.blob.core.windows.net/naughtyswing/00-2%E5%BD%B1%E7%89%87Shooting.jpg"
},
{
	id: "coop-teaching",
	title:"Swing Dance Lessons | 搖擺舞專業教學",
	contentPreview: "想要學習雙人社交舞蹈卻又不知該從何下手？快來參加我們的常態搖擺舞課程或是體驗課程，讓擁有專業舞蹈教學經歷的Naughty Swing，帶你進入搖擺舞的新世界！",
	contentReadMore: "Excited but nervous, not sure when and how to step out of your comfort zone and onto the dance floor? Now is the time, and we're here to help you make that happen! Excited but nervous, not sure when and how to step out of your comfort zone and onto the dance floor? Now is the time, and we're here to help you make that happen! With our 10-year experience in dancing and diversified exposure to different dance styles, we understand the problems you may encounter and more important, the methods to overcome explained to you in an interesting and easily understood way!",
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
				<div className='coop-introducion-ch'>
				<p>Naughty Swing頑皮搖擺舞團專攻搖擺舞蹈編排、舞蹈教學、影片拍攝、舞蹈演出等！如果你也熱愛爵士樂，並且深深被Swing Dance搖擺舞的歡樂所吸引，就快來看看可以怎麼與我們合作吧！</p>
				</div>
				<div className='coop-introducion-en'>
				<p>More than just a dance crew - Naughty Swing specializes in Swing Dance choreography, teaching and performance as well as video filming and editing. If you're amazed by the beauty of Swing Dance, why not pick some options below and work with us now!</p>
				</div>
			</div>
			<div className="coop-sections-wrapper">
				{ CoopBlockSet }
			</div>
		</div>
	);
};

export default Cooperative;
import React from 'react';
import CoopBlock from './CoopBlock';
import CoopSet from '../../helpers/CoopSet';

const Cooperative = () => {

	let CoopBlockSet = [];
	
	for(var i=0; i < CoopSet.length; i++){
		CoopBlockSet.push(
			<CoopBlock
				key = { CoopSet[i].id }
				id = { CoopSet[i].id }
				title= { CoopSet[i].title }
				contentChinese = { CoopSet[i].contentChinese }
				contentEnglish = { CoopSet[i].contentEnglish }
				mediaTitle = { CoopSet[i].mediaTitle }
				mediaSrc= { CoopSet[i].mediaSrc }
			/>
		);
	}

	return (
		<div className='coop-container'>
			<section className="coop-introducion-wrapper">
				<div className='coop-introducion-ch'>
				<p>Naughty Swing頑皮搖擺舞團專攻搖擺舞蹈編排、舞蹈教學、影片拍攝、舞蹈演出等！如果你也熱愛爵士樂，並且深深被Swing Dance搖擺舞的歡樂所吸引，就快來看看可以怎麼與我們合作吧！</p>
				</div>
				<div className='coop-introducion-en'>
				<p>More than just a dance crew - Naughty Swing specializes in Swing Dance choreography, teaching and performance as well as video filming and editing. If you're amazed by the beauty of Swing Dance, why not pick some options below and work with us now!</p>
				</div>
			</section>
			<section className="coop-sections-wrapper">
				{ CoopBlockSet }
			</section>
		</div>
	);
};

export default Cooperative;
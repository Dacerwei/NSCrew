import React from 'react';

const brands = [
	{
		name: '3M',
		src: 'https://naughtyswing.blob.core.windows.net/naughtyswing/brand_3m.png',
		width: null,
		height: null,
	},
	{
		name: 'CatchPlay',
		src: 'https://naughtyswing.blob.core.windows.net/naughtyswing/brand_catchplay.svg',
		width: null,
		height: null,
	},
	{
		name: 'Legacy',
		src: 'https://naughtyswing.blob.core.windows.net/naughtyswing/brand_legacy.png',
		width: null,
		height: null,
	},
	{
		name: 'Lee',
		src: 'https://naughtyswing.blob.core.windows.net/naughtyswing/brand_lee.svg',
		width: null,
		height: null,
	},
	{
		name: 'Coretronic',
		src: 'https://naughtyswing.blob.core.windows.net/naughtyswing/brand_coretronic.jpg',
		width: null,
		height: null,
	},
	{
		name: 'GoldenHorse',
		src: 'https://naughtyswing.blob.core.windows.net/naughtyswing/brand_goldenhorse.jpeg',
		width: null,
		height: null,
	},
	{
		name: 'MOCA',
		src: 'https://naughtyswing.blob.core.windows.net/naughtyswing/brand_moca.jpg',
		width: null,
		height: null,
	},
	{
		name: 'TEDxCCU',
		src: 'https://naughtyswing.blob.core.windows.net/naughtyswing/brand_tedccu.png',
		width: null,
		height: null,
	},
	{
		name: 'LionTravel',
		src: 'https://naughtyswing.blob.core.windows.net/naughtyswing/brand_liontravel.png',
		width: null,
		height: null,
	},
	{
		name: 'TTT',
		src: 'https://naughtyswing.blob.core.windows.net/naughtyswing/brand_ttt.png',
		width: null,
		height: null,
	},

];

const Brands = () => {
	let brandsArray = [];
	for( let i=0; i < brands.length; i++) {
		brandsArray.push(
			<div className='brands-item' key={i}>
				<img className='brands-item-img' src={brands[i].src} />
			</div>
		);
	}
	return(
		<div className='brands-container'>
			{brandsArray}
		</div>
	)
}

export default Brands;
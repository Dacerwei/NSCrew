import React from 'react';
import brands from '../helpers/Brands.js'
const Brands = () => {
	let brandsArray = [];
	for( let i=0; i < brands.length; i++) {
		brandsArray.push(
			<div className='brands-item' key={i} style={{backgroundColor: brands[i].backgroundColor}}>
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
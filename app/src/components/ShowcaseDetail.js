import React from 'react'

const detailAreaStyle = {
	textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: '5% 10%',
    margin: '0px'
};

const detailContentStyle ={
	margin: '1%',
	padding: '0'
}

const ShowcaseDetail = (props) => {
	return(
		<div className="portfoliodetail-container">
			<h1 className="portfoliodetail-title">{ props.detailTitle }</h1>
			<p className="portfoliodetail-info">{ props.detailInfo }</p>
		</div>
	);
}

export default ShowcaseDetail;

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
		<div className="showcase-detail">
			<h1 className="detail-title">{ props.detailTitle }</h1>
			<p className="detail-info">{ props.detailInfo }</p>
		</div>
	);
}

export default ShowcaseDetail;

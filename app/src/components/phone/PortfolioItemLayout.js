import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import PortfolioItem from './PortfolioItem';
import Drawer from 'material-ui/Drawer';

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

class PortfolioItemLayout extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			containerWidth: 0,
			layoutArray: null,
			rowLimit: 0,
			isExpandDetail: false,
			detailData: null
		}
		this.getRowLimit = this.getRowLimit.bind(this);
		this.handleResize = this.handleResize.bind(this);
		this.handleItemClick = this.handleItemClick.bind(this);
		this.handleDetailClose = this.handleDetailClose.bind(this);
		this.getRearrangeArray = this.getRearrangeArray.bind(this);
	}

	componentDidMount() {
		let containerWidth = Math.floor(this.refs.LayoutArea.clientWidth);
		let rowLimit = this.getRowLimit(containerWidth);
		let layoutArray = this.getRearrangeArray(this.props.photo_set, containerWidth, rowLimit);

		this.setState({
			rowLimit: rowLimit, 
			containerWidth: containerWidth,
			layoutArray: layoutArray,
			isExpandDetail: false,
		});
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	getRowLimit(max_width) {
		if(max_width >= 1024) {
			return 3;
		}else if (max_width >= 480) {
			return 2;
		}else {
			return 1;
		}
	}

	handleItemClick(opt) {			
		this.setState({
			isExpandDetail: true,
			detailData: opt,
		});
	}

	handleDetailClose() {
		this.setState({isExpandDetail: false});
	}

	handleResize() {
		const containerWidth = Math.floor(this.refs.LayoutArea.clientWidth);
		const rowLimit = this.getRowLimit(containerWidth);
		const layoutArray = this.getRearrangeArray(this.props.photo_set, containerWidth, rowLimit);
		this.setState({
			containerWidth: containerWidth,
			layoutArray: layoutArray,
			rowLimit: rowLimit
		});
	}

	getRearrangeArray(photo_set, containerWidth, rowLimit) {
		let output = [];
		const remainder = photo_set.length % rowLimit;
		let lastRowWidth=null;
		let lastRowIndex=null;

		if(remainder) { //檢查最後一行是否需要進行調整 因為數量不到 row limit
			lastRowWidth = Math.floor(containerWidth);
			lastRowIndex = photo_set.length - remainder;
		}

		for(let i=0; i<photo_set.length; i+=rowLimit){
			let totlalAspectRatio = 0 ;
			let rowHeight = 0;
			for(let j=i; j<i+rowLimit; j++){

				if( j == photo_set.length) {
					break;
				}

				totlalAspectRatio += photo_set[j].aspectRatio;  //決定此行照片的總高寬比
			}

			if (i === lastRowIndex) {
				rowHeight = lastRowWidth/totlalAspectRatio;  //決定最後一行行高
			}else {
				rowHeight = containerWidth/totlalAspectRatio; //決定一般行行高
			}

			for(let k=i; k<i+rowLimit; k++){  //將同一行的照片推入output array
				if(k == photo_set.length){
					break;
				}
				output.push(
					<PortfolioItem 
						key={photo_set[k].ID}
						row={i}
						onClick={ this.handleItemClick } 
						opt={ photo_set[k] } 
						height={ rowHeight }
					/>
				);
			}
		}
		return output;
	}

	render() {
		const {
			isExpandDetail,
			layoutArray,
			detailData,
		} = this.state;

		return(
			<div className="portfolioitemlayout-container" ref="LayoutArea" >
			{
				isExpandDetail &&
				<Drawer
					open={isExpandDetail}
					width={'100%'}
				>
					<PortfolioDetail
						key={detailData.ID}
						detailTitle={detailData.title}
						detailInfoCh={detailData.chineseDescription} 
						detailInfoEn={detailData.englishDescription}
						youtubeVideoID={detailData.youtubeVideoID}
						onClick = { this.handleDetailClose }
					/>
				</Drawer>
			}
				{ layoutArray }
			</div>
		);
	}
}

export default PortfolioItemLayout;

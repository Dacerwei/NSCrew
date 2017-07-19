import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import PorfolioItem from './PorfolioItem';
import '../../assets/styles/portfolio.css';

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

class PorfolioItemLayout extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			containerWidth: 0,
			showDetail: false,
			layoutArray: null,
			rowLimit: 0
		}
		this.getRowLimit = this.getRowLimit.bind(this);
		this.handleResize = this.handleResize.bind(this);
		this.handleItemClick = this.handleItemClick.bind(this);
		this.getRearrangeArray = this.getRearrangeArray.bind(this);
	}

	componentDidMount() {
		var containerWidth = Math.floor(this.refs.LayoutArea.clientWidth);
		var rowLimit = this.getRowLimit(containerWidth);
		var layoutArray = this.getRearrangeArray(this.props.photo_set, containerWidth, rowLimit);

		this.setState({
			rowLimit: rowLimit, 
			containerWidth: containerWidth,
			layoutArray: layoutArray
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

	handleItemClick(i, opt) {
		console.log(opt);
		console.log(i);
		let { layoutArray, rowLimit } = this.state;
		let position = i + rowLimit;

		layoutArray.insert(position, <PortfolioDetail key={i+0.5} detailTitle={opt.title} detailInfo={opt.info} />);
		
		this.setState({
			layoutArray:layoutArray,
			showDetail: true
		});
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
		let remainder = photo_set.length % rowLimit;
		let lastRowWidth=null;
		let lastRowIndex=null;

		if(remainder) { //檢查最後一行是否需要進行調整 因為數量不到 row limit
			lastRowWidth = Math.floor(containerWidth);
			lastRowIndex = photo_set.length - remainder;
		}

		for(let i=0; i<photo_set.length; i+=rowLimit){
			let totlalAspectRatio = 0 ;
			let rowHeight = 0;
			//
			for(let j=i; j<i+rowLimit; j++){

				if( j == photo_set.length) {
					break;
				}

				totlalAspectRatio += photo_set[j].aspectRatio;  //決定此行照片的總高寬比
			}

			if (i === lastRowIndex) {
				rowHeight = lastRowWidth / totlalAspectRatio;  //決定最後一行行高
			}else {
				rowHeight = containerWidth / totlalAspectRatio; //決定一般行行高
			}

			for(var k=i; k<i+rowLimit; k++){  //將同一行的照片推入output array
				if(k == photo_set.length){
					break;
				}
				output.push(
					<PorfolioItem 
						key={k}
						row={i}
						onClick = { this.handleItemClick } 
						opt= { photo_set[k] } 
						height={ rowHeight }
					/>
				);
			}
		}
		return output;
	}

	render() {
		return(
			<div className="portfolioitemlayout-container" ref="LayoutArea" >
				{ this.state.layoutArray }
			</div>
		);
	}
}

export default PorfolioItemLayout;
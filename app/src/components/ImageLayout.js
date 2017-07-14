import React from 'react';
import ShowcaseDetail from './ShowcaseDetail';

class ImageLayout extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			containerWidth: 0,
			showDetail: true,
			detailTitle: null,
			detailInfo: null,
			layoutArray: null
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

	handleItemClick(title,info) {
		if( title != this.state.detailTitle ){
			this.setState({
				detailTitle: title,
				detailInfo: info
			});
			window.scrollTo(0,0);
		}
	}

	handleResize() {
		var containerWidth = Math.floor(this.refs.LayoutArea.clientWidth);
		var rowLimit = this.getRowLimit(containerWidth);
		var layoutArray = this.getRearrangeArray(this.props.photo_set, containerWidth, rowLimit);
		this.setState({ 
			containerWidth: containerWidth,
			layoutArray: layoutArray
		});
	}

	getRearrangeArray(photo_set, containerWidth, rowLimit) {
		var output = [];
		var remainder = photo_set.length % rowLimit;

		if(remainder) {
			var lastRowWidth = Math.floor(containerWidth);
			var lastRowIndex = photo_set.length - remainder;
		}

		for(var i=0; i<photo_set.length; i+=rowLimit){
			var totlalAspectRatio = 0 ;
			var rowHeight = 0;
			for(var j=i; j<i+rowLimit; j++){

				if( j == photo_set.length) {
					break;
				}

				totlalAspectRatio += photo_set[j].aspectRatio;
			}

			if (i === lastRowIndex) {
				rowHeight = lastRowWidth / totlalAspectRatio;
			}else {
				rowHeight = containerWidth / totlalAspectRatio;
			}

			for(var k=i; k<i+rowLimit; k++){
				if(k == photo_set.length){
					break;
				}
				output.push(
					<div className="item" key={k} onClick = { this.handleItemClick.bind(this,photo_set[k].title, photo_set[k].info) } >
						<figure>
							<img src={ photo_set[k].src } height={ rowHeight } width={ rowHeight * photo_set[k].aspectRatio } />
							<figcaption>
								<h3>{ photo_set[k].title }</h3>
							</figcaption>
						</figure>
					</div>
				);
			}
		}
		return output;
	}

	render() {
		return(
			<div id="ImageLayoutArea" ref="LayoutArea" >
				<ShowcaseDetail detailTitle={this.state.detailTitle} detailInfo={this.state.detailInfo} />
				{ this.state.layoutArray }
			</div>
		);
	}
}

export default ImageLayout;
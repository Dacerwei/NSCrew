import React from 'react';
import Slider from 'react-slick';
const settings = {
    dots: true,
    autoplay: true,
    lazyload: true,
    arrows: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    classNames: 'aSlide'
};
class MainSlider extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Slider {...settings} >
                    <img src="https://firebasestorage.googleapis.com/v0/b/naughty-swing-official-website.appspot.com/o/portfolio%2Fportfolio_01_wtp_mini.jpg?alt=media&token=c2de8be3-9b94-4326-96c6-68a17d4d1a0d" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/naughty-swing-official-website.appspot.com/o/portfolio%2Fportfolio_07_fisrtdanceinwedding_mini.jpg?alt=media&token=1414acfe-6aff-461f-9a58-8258d1faffb2" />
                </Slider>
            </div>
        );
    }
}

export default MainSlider;
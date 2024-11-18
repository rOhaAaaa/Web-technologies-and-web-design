import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductTile from '../producttile/ProductTile';
import './productslider.css';

import foundationImage from '../../images/foundation.jpg';
import mascaraImage from '../../images/mascara.jpg';
import bronzerImage from '../../images/bronzer.jpg';
import blushImage from '../../images/blush.jpg';
import oilImage from '../../images/oil.jpg';
import glossImage from '../../images/gloss.jpg';

const PrevArrow = (props) => {
const { onClick } = props;
return (
    <div className="arrow left" onClick={onClick}>
    &lt;
    </div>
);
};

const NextArrow = (props) => {
const { onClick } = props;
return (
    <div className="arrow right" onClick={onClick}>
    &gt;
    </div>
);
};

const ProductSlider = () => {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
    {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        },
    },
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        },
    },
    ],
};

return (
    <div className="slider-wrapper">
    <Slider {...settings}>
        <ProductTile title="Foundation" description="A natural shade for a flawless skin tone that hydrates and evens out the texture" image={foundationImage} />
        <ProductTile title="Mascara" description="Adds volume and length to lashes for a dramatic look" image={mascaraImage} />
        <ProductTile title="Bronzer" description="Adds a natural glow to contour and highlight cheekbones" image={bronzerImage} />
        <ProductTile title="Blush" description="A fresh blush that adds brightness and a healthy look to the face" image={blushImage} />
        <ProductTile title="Lip oil" description="Moisturizes and nourishes the lips, leaving a light glowing effect" image={oilImage} />
        <ProductTile title="Lip gloss" description="Lip gloss with a moisturizing effect that adds soft shine and care" image={glossImage} />
    </Slider>
    </div>
);
};

export default ProductSlider;

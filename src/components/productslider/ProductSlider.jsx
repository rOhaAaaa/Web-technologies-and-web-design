import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductTile from '../producttile/ProductTile';
import './productslider.css';

import tonalsImage from '../../images/tonals.jpg';
import mascarasImage from '../../images/mascaras.jpg';
import bronzersImage from '../../images/bronzers.jpg';
import blushesImage from '../../images/blushes.jpg';
import lipsticksImage from '../../images/lipsticks.jpg';
import glossesImage from '../../images/glasses.jpg';

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
        <ProductTile title="Toners" description="Our assortment includes high-quality tonal creams for any skin type. Tonal products provide even coverage, moisturize the skin and help create a flawless face. Choose the perfect shade for your skin tone." image={tonalsImage} />
        <ProductTile title="Mascara for eyelashes" description="Our range of mascaras will help you create a dramatic look with volume and length for your lashes. Mascaras provide a lasting effect and emphasize your eyes, giving them expressiveness." image={mascarasImage} />
        <ProductTile title="Bronzers" description="Our bronzers completely give you a natural glow and shade your facial features. They are easily mixed with other cosmetic products, emphasizing the contours and giving the face a fresh look" image={bronzersImage} />
        <ProductTile title="Blushes" description="Choose a blush from our assortment that gives freshness and brightness to the face. They are easily applied and give a healthy look, creating a natural blush on the skin." image={blushesImage} />
        <ProductTile title="Lipsticks" description="Our assortment includes high-quality lipsticks of various shades that are suitable for any skin type. Lipsticks give the lips a rich color, provide moisture and comfort throughout the day. Choose the perfect shade to create your unique look." image={lipsticksImage} />
        <ProductTile title="Lip glosses" description="Our lip glosses give the lips moisture and a light shining effect. Choose from our range to add softness and a well-groomed look to your lips throughout the day." image={glossesImage} />
    </Slider>
    <div className="view-more-wrapper">
        <button className="view-more-button">View more</button>
        </div>
    </div>
);
};

export default ProductSlider;

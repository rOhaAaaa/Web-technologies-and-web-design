import React from 'react';
import Header from './components/header/Header';
import MainBanner from './components/mainbanner/MainBanner';
import ProductSlider from './components/productslider/ProductSlider'; 
import Footer from './components/footer/Footer';

const Home = () => {
    return (
    <>
        <Header />
        <MainBanner />
        <ProductSlider />
        <Footer />
    </>
    );
};

export default Home;

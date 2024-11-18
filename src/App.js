import React from 'react';

import Header from './components/header/Header';
import MainBanner from './components/mainbanner/MainBanner';
import ProductSlider from './components/productslider/ProductSlider'; 
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <ProductSlider />
      <Footer />
    </div>
  );
}

export default App;

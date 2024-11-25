import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { Provider } from 'react-redux'; 
import store from './redux/store'; 

import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Item from './components/item/Item';
import CartPage from './components/cartpage/CartPage'; 

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Item />} />
          <Route path="/cart" element={<CartPage />} /> 
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

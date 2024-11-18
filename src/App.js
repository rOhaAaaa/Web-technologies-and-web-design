  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
  import Home from './components/home/Home';
  import Catalog from './components/catalog/Catalog';
  import Footer from './components/footer/Footer';
  import Header from './components/header/Header';
  import Item from './components/item/Item'; 

  function App() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Item />} /> 
        </Routes>
        <Footer />
      </Router>
    );
  }

  export default App;

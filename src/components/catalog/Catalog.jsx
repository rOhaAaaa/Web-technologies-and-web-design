import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import ProductCard from './ProductCard'; 
import PrimaryButton from '../PrimaryButton'; 
import Select from '../Select'; 
import './catalog.css'; 
import foundationImage from '../../images/foundation.jpg';
import mascaraImage from '../../images/mascara.jpg';
import bronzerImage from '../../images/bronzer.jpg';
import blushImage from '../../images/blush.jpg';
import oilImage from '../../images/oil.jpg';
import glossImage from '../../images/gloss.jpg';
import highlighterImage from '../../images/highlighter.jpg';
import concealerImage from '../../images/concealer.jpg';
import creamImage from '../../images/cream.jpg';
import powderImage from '../../images/pudra.jpg';
import highlighter2Image from '../../images/highlighter2.jpg';
import mascara2Image from '../../images/mascara2.jpg';
import lipbalmImage from '../../images/lipbalm.jpg';
import perfumeImage from '../../images/perfume.jpg';
import perfume2Image from '../../images/perfume2.jpg';
import perfume3Image from '../../images/perfume3.jpg';
import perfume4Image from '../../images/perfume4.jpg';
import foundation2Image from '../../images/foundation2.jpg';
import lipstick2Image from '../../images/lipstick2.jpg';
import eyeshadowImage from '../../images/eyeshadow.jpg';

const Catalog = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Foundation',
      description: 'A natural shade for a flawless skin tone that hydrates.',
      price: 300,
      image: foundationImage,
      type: 'Makeup',
    },
    {
      id: 2,
      name: 'Mascara',
      description: 'Adds volume and length to lashes for a dramatic look.',
      price: 150,
      image: mascaraImage,
      type: 'Makeup'
    },
    {
      id: 3,
      name: 'Bronzer',
      description: 'Adds a natural glow to contour and highlight cheekbones.',
      price: 500,
      image: bronzerImage,
      type: 'Makeup'
    },
    {
      id: 4,
      name: 'Blush',
      description: 'A fresh blush that adds brightness and a healthy look to the face.',
      price: 100,
      image: blushImage,
      type: 'Makeup'
    },
    {
      id: 5,
      name: 'Lip oil',
      description: 'Moisturizes and nourishes the lips, leaving a light glowing effect.',
      price: 250,
      image: oilImage,
      type: 'Lip Care'
    },
    {
      id: 6,
      name: 'Lip gloss',
      description: 'Lip gloss with a moisturizing effect that adds soft shine and care.',
      price: 200,
      image: glossImage,
      type: 'Lip Care'
    },
    {
      id: 7,
      name: 'Highlighter',
      description: 'Adds a natural feel to the skin, enhancing the contours.',
      price: 350,
      image: highlighterImage,
      type: 'Makeup'
    },
    {
      id: 8,
      name: 'Concealer',
      description: 'Safely covers dark stains, stains and imperfections in the skin.',
      price: 280,
      image: concealerImage,
      type: 'Makeup'
    },
    {
      id: 9,
      name: 'Cream',
      description: 'A nourishing face cream that deeply hydrates and protects the skin.',
      price: 345,
      image: creamImage,
      type: 'Skincare'
    },
    {
      id: 10,
      name: 'Powder',
      description: 'A lightweight setting powder that controls shine and gives a matte finish for long-lasting makeup.',
      price: 475,
      image: powderImage,
      type: 'Skincare'
    },
    {
      id: 11,
      name: 'Highlighter',
      description: 'A radiant highlighter that enhances your skins natural glow and accentuates facial contours.',
      price: 500,
      image: highlighter2Image,
      type: 'Makeup'
    },
    {
      id: 12,
      name: 'Mascara',
      description: 'A volumizing mascara that adds length and thickness to your lashes for a bold, dramatic look.',
      price: 185,
      image: mascara2Image,
      type: 'Makeup'
    },
    {
      id: 13,
      name: 'Lip balm',
      description: 'A moisturizing lip balm that softens and nourishes lips, leaving a subtle sheen.',
      price: 225,
      image: lipbalmImage,
      type: 'Lip Care'
    },
    {
      id: 14,
      name: 'Perfume',
      description: 'A fresh and floral fragrance that embodies elegance and sophistication for everyday wear.',
      price: 1000,
      image: perfumeImage,
      type: 'Perfumes'
    },
    {
      id: 15,
      name: 'Perfume',
      description: ' A rich and musky scent with warm undertones, perfect for evening occasions.',
      price: 1500,
      image: perfume2Image,
      type: 'Perfumes'
    },
    {
      id: 16,
      name: 'Perfume',
      description: 'A vibrant, fruity fragrance with a burst of citrus, ideal for a refreshing day out.',
      price: 1850,
      image: perfume3Image,
      type: 'Perfumes'
    },
    {
      id: 17,
      name: 'Perfume',
      description: 'A sensual, woody perfume that combines deep earthy notes with a hint of sweetness.',
      price: 2000,
      image: perfume4Image,
      type: 'Perfumes'
    },
    {
      id: 18,
      name: 'Foundation',
      description: 'A full-coverage foundation that evens out skin tone while providing a flawless, natural finish.',
      price: 210,
      image: foundation2Image,
      type: 'Makeup'
    },
    {
      id: 19,
      name: 'Lipstick',
      description: 'A creamy, long-lasting lipstick that delivers rich color and hydration for a smooth, bold look.',
      price: 195,
      image: lipstick2Image,
      type: 'Makeup'
    },
    {
      id: 20,
      name: 'Eyeshadow',
      description: 'A versatile eyeshadow palette with a range of shades to create both subtle and bold eye looks.',
      price: 95,
      image: eyeshadowImage,
      type: 'Makeup'
    },

  ]);

  const [filter, setFilter] = useState('All'); 
  const [minPrice, setMinPrice] = useState(''); 
  const [maxPrice, setMaxPrice] = useState(''); 
  const [searchQuery, setSearchQuery] = useState(''); 


  const filteredProducts = products.filter(product => {
    const matchesCategory = filter === 'All' || product.type === filter;
  
    const matchesPrice = (!minPrice || product.price >= minPrice) &&
                          (!maxPrice || product.price <= maxPrice);
  
    const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                product.description.toLowerCase().includes(searchQuery.toLowerCase());
  
    return matchesCategory && matchesPrice && matchesSearchQuery; 
  });

  const filterOptions = ['All', 'Makeup', 'Lip Care','Perfumes', 'Skincare'];

  return (
    <div className="catalog-container">
      <div className="filters-wrapper">
  <div className="filter-group">
    <Select 
      options={filterOptions} 
      onChange={(e) => setFilter(e.target.value)} 
      className="filter-select"
    />
    <input
      type="number"
      placeholder="Min Price"
      value={minPrice}
      onChange={(e) => setMinPrice(e.target.value)}
      className="price-input"
    />
    <input
      type="number"
      placeholder="Max Price"
      value={maxPrice}
      onChange={(e) => setMaxPrice(e.target.value)}
      className="price-input"
    />
  </div>
  <div className="search-group">
  <div className="search-wrapper">
    <input
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)} 
      className="search-input"
    />
    <span className="search-icon">&#128269;</span>
  </div>
</div>
  <div className="apply-button-wrapper">
    <PrimaryButton label="Apply" onClick={() => alert('Filters applied!')} />
  </div>
</div>


      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;

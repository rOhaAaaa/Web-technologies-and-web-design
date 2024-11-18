import React from 'react';
import ProductCard from './ProductCard'; // Для рендерингу кожного товару
import PrimaryButton from '../PrimaryButton'; // Імпорт компонента кнопки
import Select from '../Select'; // Імпорт компонента select
import './catalog.css'; // Стилі для сторінки
import foundationImage from '../../images/foundation.jpg';
import mascaraImage from '../../images/mascara.jpg';
import bronzerImage from '../../images/bronzer.jpg';
import blushImage from '../../images/blush.jpg';
import oilImage from '../../images/oil.jpg';
import glossImage from '../../images/gloss.jpg';
import highlighterImage from '../../images/highlighter.jpg';
import concealerImage from '../../images/concealer.jpg';


const products = [
  {
    id: 1,
    name: 'Foundation',
    description: 'A natural shade for a flawless skin tone that hydrates.',
    price: 300,
    image: foundationImage,
  },
  {
    id: 2,
    name: 'Mascara',
    description: 'Adds volume and length to lashes for a dramatic look.',
    price: 150,
    image: mascaraImage,
  },
  {
    id: 3,
    name: 'Bronzer',
    description: 'Adds a natural glow to contour and highlight cheekbones.',
    price: 500,
    image: bronzerImage,
  },
  {
    id: 4,
    name: 'Blush',
    description: 'A fresh blush that adds brightness and a healthy look to the face.',
    price: 100,
    image: blushImage,
  },
  {
    id: 5,
    name: 'Lip oil',
    description: 'Moisturizes and nourishes the lips, leaving a light glowing effect.',
    price: 250,
    image: oilImage,
  },
  {
    id: 6,
    name: 'Lip gloss',
    description: 'Lip gloss with a moisturizing effect that adds soft shine and care.',
    price: 200,
    image: glossImage,
  },
  {
    id: 7,
    name: 'Highlighter',
    description: 'Adds a natural feel to the skin, enhancing the contours.',
    price: 350,
    image: highlighterImage,
  },
  {
    id: 8,
    name: 'Concealer',
    description: 'Safely covers dark stains, stains and imperfections in the skin.',
    price: 280,
    image: concealerImage,
  }
];

const Catalog = () => {
    const filterOptions = ['Filter 1', 'Filter 2', 'Filter 3'];
  
    return (
      <div className="catalog-container">
        <div className="filters-wrapper">
          <Select options={filterOptions} />
          <Select options={filterOptions} />
          <Select options={filterOptions} />
          <PrimaryButton label="Apply" onClick={() => alert('Filters applied!')} />
        </div>
  
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Catalog;

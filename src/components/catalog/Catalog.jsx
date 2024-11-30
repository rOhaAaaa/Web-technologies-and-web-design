import React, { useState, useEffect, useCallback } from 'react'; 
import ProductCard from './ProductCard'; 
import PrimaryButton from '../PrimaryButton'; 
import Select from '../Select'; 
import { getAllProducts } from '../../services/productApi';
import Spinner from '../loader/Spinner';
import './catalog.css';
import debounce from 'lodash/debounce';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const filters = {};
      if (filter !== 'All') filters.type = filter;
      if (minPrice) filters.minPrice = minPrice;
      if (maxPrice) filters.maxPrice = maxPrice;
      if (searchQuery) filters.search = searchQuery;

      console.log('Запит до API з фільтрами:', filters);
      const { data } = await getAllProducts(filters);
      console.log('Received products:', data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Не вдалося завантажити продукти. Спробуйте пізніше.");
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchProducts = useCallback(debounce(fetchProducts, 300), [filter, minPrice, maxPrice, searchQuery]);

  useEffect(() => {
    debouncedFetchProducts();
    return () => {
      debouncedFetchProducts.cancel();
    };
  }, [debouncedFetchProducts]); 

  const filterOptions = ['All', 'Makeup', 'Lip Care', 'Perfumes', 'Skincare'];

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
          <PrimaryButton label="Apply" onClick={debouncedFetchProducts} />
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : error ? (
        <div>{error}</div>
      ) : products.length === 0 ? (
        <div>Нічого не знайдено</div>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;

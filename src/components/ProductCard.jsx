import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-brand">Brand: {product.brand}</p>
        <p className="product-price">Price: ${product.price.toFixed(2)}</p>
        <p className="product-stock">
          {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
        </p>
        <button className="add-to-cart-btn" disabled={!product.stock}>
          {product.stock > 0 ? 'Add to Cart' : 'Notify Me'}
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;

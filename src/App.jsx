import React from 'react'
import products from './products.json'
import './index.css'

function App() {
  return (
    <>
      <header className="container">
        <a href="/" className="brand-logo">MicroPoisson.ca</a>
        <div className="cart-icon snipcart-checkout">
          🛒 Cart
          <span className="snipcart-items-count">0</span>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-content">
            <h1>Artisan Tinned Fish</h1>
            <p className="subtitle">
              Curated conservas from the finest maritime producers. Affordable luxury, delivered to your door in Quebec.
            </p>
          </div>
        </section>

        <section className="container">
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <span className="product-brand">{product.brand}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                  
                  <div className="product-footer">
                    <span className="product-price">${product.price.toFixed(2)}</span>
                    <button
                      className="btn-cart snipcart-add-item"
                      data-item-id={product.id}
                      data-item-price={product.price}
                      data-item-description={product.description}
                      data-item-image={product.image}
                      data-item-name={`${product.brand} - ${product.name}`}
                      data-item-url="/"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default App

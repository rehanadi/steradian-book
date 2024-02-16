import React from 'react'

const Price = () => {
  return (
    <div className="filter-price">
      <div className="price-container">
        <span>Rp</span>
        <input type="number" placeholder="Minimum" />
      </div>

      <div className="price-container">
        <span>Rp</span>
        <input type="number" placeholder="Maximum" />
      </div>

      <div className="btn-container">
        <button className="btn">
          Filter Harga
        </button>
      </div>
    </div>
  )
}

export default Price
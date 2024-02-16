import { FilterStock } from '@/constants/common'

const Filter = () => {
  return (
    <div className="filter">
      <div className="container">
        <h4 className="title">
          Buku
        </h4>

        <div className="content">
          <ul className="filter-categories">
            <li>
              <a href="#" className="active">Semua</a>
            </li>
            <li>
              <a href="#">Diet & Health</a>
            </li>
            <li>
              <a href="#">Social Sciences</a>
            </li>
            <li>
              <a href="#">Dictionary</a>
            </li>
            <li>
              <a href="#">Art & Photography</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <h4 className="title">
          Stok
        </h4>

        <div className="content">
          <div className="filter-stock">
            <div className="container">
              <input 
                type="radio" 
                id="filter-stock-all" 
                name="stock" 
                value="" 
              />
              <label htmlFor="filter-stock-all">Semua</label>
            </div>
            
            <div className="container">
              <input 
                type="radio" 
                id="filter-stock-available" 
                name="stock" 
                value={FilterStock.Available} 
              />
              <label htmlFor="filter-stock-available">Tersedia</label>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h4 className="title">
          Harga
        </h4>

        <div className="content">
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
        </div>
      </div>
    </div>
  )
}

export default Filter
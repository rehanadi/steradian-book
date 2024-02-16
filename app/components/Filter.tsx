import Categories from '@/components/Categories'
import Stock from '@/components/Stock'
import Price from '@/components/Price'

const Filter = () => {
  return (
    <div className="filter">
      <div className="container">
        <h4 className="title">
          Buku
        </h4>

        <div className="content">
          <Categories />
        </div>
      </div>

      <div className="container">
        <h4 className="title">
          Stok
        </h4>

        <div className="content">
          <Stock />
        </div>
      </div>

      <div className="container">
        <h4 className="title">
          Harga
        </h4>

        <div className="content">
          <Price />
        </div>
      </div>
    </div>
  )
}

export default Filter
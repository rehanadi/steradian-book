import Categories from '@/components/filter/Categories'
import Stock from '@/components/filter/Stock'
import Price from '@/components/filter/Price'

const FilterSection = () => {
  return (
    <section className="filter">
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
    </section>
  )
}

export default FilterSection

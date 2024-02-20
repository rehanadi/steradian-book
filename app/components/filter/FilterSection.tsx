import Categories from '@/components/filter/Categories'
import Stock from '@/components/filter/Stock'
import Price from '@/components/filter/Price'
import styles from '@/styles/Filter.module.css'

const FilterSection = () => {
  return (
    <section className={styles.filter}>
      <div className={styles.container}>
        <h4 className={styles.title}>
          Buku
        </h4>

        <div className={styles.content}>
          <Categories />
        </div>
      </div>

      <div className={styles.container}>
        <h4 className={styles.title}>
          Stok
        </h4>

        <div className={styles.content}>
          <Stock />
        </div>
      </div>

      <div className={styles.container}>
        <h4 className={styles.title}>
          Harga
        </h4>

        <div className={styles.content}>
          <Price />
        </div>
      </div>
    </section>
  )
}

export default FilterSection

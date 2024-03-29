import styles from '@/styles/Catalog.module.css'

type CatalogFC = React.FC<{ Aside: React.FC, Content: React.FC }>

const Catalog: CatalogFC = ({ Aside, Content }) => {
  return (
    <section className={`${styles.catalog} section-padding`}>
      <aside>
        <Aside />
      </aside>
      <div className={styles.content}>
        <Content />
      </div>
    </section>
  )
}

export default Catalog
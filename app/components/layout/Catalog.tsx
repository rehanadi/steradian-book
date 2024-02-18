type CatalogFC = React.FC<{ Aside: React.FC, Main: React.FC }>

const Catalog: CatalogFC = ({ Aside, Main }) => {
  return (
    <section className="catalog section-padding">
      <aside>
        <Aside />
      </aside>
      <main>
        <Main />
      </main>
    </section>
  )
}

export default Catalog
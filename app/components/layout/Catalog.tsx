type CatalogFC = React.FC<{ Aside: React.FC, Content: React.FC }>

const Catalog: CatalogFC = ({ Aside, Content }) => {
  return (
    <section className="catalog section-padding">
      <aside>
        <Aside />
      </aside>
      <div className="content">
        <Content />
      </div>
    </section>
  )
}

export default Catalog
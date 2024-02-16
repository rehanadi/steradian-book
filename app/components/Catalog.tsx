import React from 'react'
import Filter from '@/components/Filter'
import Books from './Books'

const Catalog = () => {
  return (
    <section className="catalog section-padding">
      <aside>
        <Filter />
      </aside>

      <div className="content">
        <Books />
      </div>
    </section>
  )
}

export default Catalog
import React from 'react'
import Filtering from '@/components/Filtering'
import Books from './Books'

const Catalog = () => {
  return (
    <section className="catalog section-padding">
      <aside>
        <Filtering />
      </aside>

      <div className="content">
        <Books />
      </div>
    </section>
  )
}

export default Catalog
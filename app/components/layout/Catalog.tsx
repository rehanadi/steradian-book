import React from 'react'
import FilterSection from '@/components/filter/FilterSection'
import BooksSection from '@/components/books/BooksSection'

const Catalog = () => {
  return (
    <section className="catalog section-padding">
      <aside>
        <FilterSection />
      </aside>

      <div className="content">
        <BooksSection />
      </div>
    </section>
  )
}

export default Catalog
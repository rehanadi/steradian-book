import Hero from "@/components/section/Hero"
import Catalog from "@/components/layout/Catalog"
import FilterSection from '@/components/filter/FilterSection'
import BooksSection from '@/components/books/BooksSection'

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Catalog 
        Aside={FilterSection} 
        Main={BooksSection} 
      />
    </>
  )
}

export default IndexPage

import { Suspense } from "react"
import Hero from "@/components/section/Hero"
import Catalog from "@/components/layout/Catalog"
import FilterSection from '@/components/filter/FilterSection'
import BooksSection from '@/components/books/BooksSection'

export const dynamic = 'force-dynamic'

const IndexPage = () => {
  return (
    <Suspense>
      <Hero />
      <Catalog 
        Aside={FilterSection} 
        Content={BooksSection} 
      />
    </Suspense>
  )
}

export default IndexPage

'use client'

import { useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createQueryString } from '@/utils/navigation'
import { useGetCategoriesQuery } from "@/store/index"
import { type Categories } from "@/types/categories"

const Categories = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryQuery = searchParams.get('category') || ''
  
  const queryString = useCallback(
    (name: string, value: string) => createQueryString(searchParams, name, value),
    [searchParams]
  )

  const { data, isLoading } = useGetCategoriesQuery(null)
  
  if (isLoading) return <h3>Loading...</h3>
  
  const { categories = [] }: { categories: Categories } = data

  const redirect = (categorySlug: string) => {
    router.push('/?' + queryString('category', categorySlug))
  }

  return (
    <ul className="filter-categories">
      <li>
        <span 
          onClick={() => redirect('')} 
          className={`${categoryQuery === '' ? 'active' : ''}`}
        >Semua</span>
      </li>
      {categories.map(category => (
        <li key={category.id}>
          <span 
            onClick={() => redirect(category.slug)}
            className={`${categoryQuery.toLowerCase() === category.slug.toLowerCase() ? 'active' : ''}`}
          >{category.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default Categories
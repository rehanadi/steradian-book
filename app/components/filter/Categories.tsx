'use client'

import { useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Loading from "@/components/section/Loading"
import Error from "@/components/section/Error"
import { createQueryString } from '@/utils/navigation'
import { useGetCategoriesQuery } from "@/store/index"
import type { Categories } from "@/types/categories"
import styles from '@/styles/Filter.module.css'

const Categories = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryQuery = searchParams.get('category') || ''
  
  const queryString = useCallback(
    (name: string, value: string) => createQueryString(searchParams, name, value),
    [searchParams]
  )

  const { data, isLoading, error } = useGetCategoriesQuery(null)
  
  if (isLoading) return <Loading />
  if (error) return <Error />
  
  const { categories = [] }: { categories: Categories } = data

  const redirect = (categorySlug: string) => {
    router.push('/?' + queryString('category', categorySlug))
  }

  return (
    <ul className={styles.filterCategories}>
      <li>
        <span 
          onClick={() => redirect('')} 
          className={`${categoryQuery === '' ? styles.active : ''}`}
        >Semua</span>
      </li>
      {categories.map(category => (
        <li key={category.id}>
          <span 
            onClick={() => redirect(category.slug)}
            className={`${categoryQuery.toLowerCase() === category.slug.toLowerCase() ? styles.active : ''}`}
          >{category.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default Categories
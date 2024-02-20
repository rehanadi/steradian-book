'use client'

import { useCallback } from "react"
import { useRouter, useSearchParams } from 'next/navigation'
import { createQueryString } from '@/utils/navigation'
import { Sorting } from "@/constants/common"
import styles from '@/styles/Books.module.css'

const Sort = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const sortQuery = searchParams.get('sort') || ''
  
  const queryString = useCallback(
    (name: string, value: string) => createQueryString(searchParams, name, value),
    [searchParams]
  )

  const redirect = (sort: string) => {
    router.push('/?' + queryString('sort', sort))
  }

  return (
    <fieldset className={styles.fieldsetSort}>
      <label htmlFor="filter-sort">Urutkan:</label>
      <select id="filter-sort" value={sortQuery} onChange={e => redirect(e.target.value)}>
        <option value="">Paling Sesuai</option>
        <option value={Sorting.Newest}>Terbaru</option>
        <option value={Sorting.Lowest}>Termurah</option>
        <option value={Sorting.Highest}>Termahal</option>
      </select>
    </fieldset>
  )
}

export default Sort
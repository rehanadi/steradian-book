'use client'

import { useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createQueryString } from '@/utils/navigation'
import styles from '@/styles/Books.module.css'

type PaginationFC = React.FC<{ pathname: string, page: number, pages: number }>

const Pagination: PaginationFC = ({ pathname, page, pages }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const queryString = useCallback(
    (name: string, value: string) => createQueryString(searchParams, name, value),
    [searchParams]
  )

  const redirect = (nextPage: number) => {
    router.push(pathname + '?' + queryString('page', String(nextPage)))
  }

  if (pages <= 1) return

  return (
    <ul className={styles.pagination}>
      <li>
        {page === 1 ? (
          <button 
            className={`${styles.btn} ${styles.arrow} ${styles.disabled}`}
          >«</button>
        ) : (
          <button 
            onClick={() => redirect(page - 1)} 
            className={`${styles.btn} ${styles.arrow}`}
          >«</button>
        )}
      </li>

      {[...Array(pages).keys()].map(i => (
        <li key={i}>
          <button 
            onClick={() => redirect(i + 1)} 
            className={`${styles.btn} ${page === i + 1 ? styles.active : ''}`}
          >{i + 1}</button>
        </li>
      ))}
      
      <li>
        {page === pages ? (
          <button 
            className={`${styles.btn} ${styles.arrow} ${styles.disabled}`}
          >»</button>
        ) : (
          <button 
            onClick={() => redirect(page + 1)} 
            className={`${styles.btn} ${styles.arrow}`}
          >»</button>
        )}
      </li>
    </ul>
  )
}

export default Pagination

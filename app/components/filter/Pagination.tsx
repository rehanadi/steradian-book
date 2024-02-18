'use client'

import { useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createQueryString } from '@/utils/navigation'

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
    <ul className="pagination">
      <li>
        {page === 1 ? (
          <button 
            className={`btn disabled`}
          >«</button>
        ) : (
          <button 
            onClick={() => redirect(page - 1)} 
            className='btn'
          >«</button>
        )}
      </li>

      {[...Array(pages).keys()].map(i => (
        <li key={i}>
          <button 
            onClick={() => redirect(i + 1)} 
            className={`btn ${page === i + 1 ? 'active' : ''}`}
          >{i + 1}</button>
        </li>
      ))}
      
      <li>
        {page === pages ? (
          <button 
            className={`btn disabled`}
          >»</button>
        ) : (
          <button 
            onClick={() => redirect(page + 1)} 
            className='btn'
          >»</button>
        )}
      </li>
    </ul>
  )
}

export default Pagination

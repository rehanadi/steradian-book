'use client'

import { createQueryString } from '@/lib/utils/navigation'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

type PaginationFC = React.FC<{ page: number, pages: number }>

const Pagination: PaginationFC = ({ page, pages }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const queryString = useCallback(
    (name: string, value: string) => createQueryString(searchParams, name, value),
    [searchParams]
  )

  const handleClick = (nextPage: number) => {
    router.push('/?' + queryString('page', String(nextPage)))
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
            onClick={() => handleClick(page - 1)} 
            className='btn'
          >«</button>
        )}
      </li>

      {[...Array(pages).keys()].map(i => (
        <li key={i}>
          <button 
            onClick={() => handleClick(i + 1)} 
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
            onClick={() => handleClick(page + 1)} 
            className='btn'
          >»</button>
        )}
      </li>
    </ul>
  )
}

export default Pagination

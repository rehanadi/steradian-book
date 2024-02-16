'use client'

import { useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createQueryString } from '@/utils/navigation'
import { FilterStock } from '@/constants/common'

const Stock = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stockQuery = searchParams.get('stock') || ''
  
  const queryString = useCallback(
    (name: string, value: string) => createQueryString(searchParams, name, value),
    [searchParams]
  )

  const redirect = (stock: string) => {
    router.push('/?' + queryString('stock', stock))
  }

  return (
    <div className="filter-stock">
      <div className="container">
        <input 
          type="radio" 
          id="stock-all" 
          name="stock" 
          value=""
          checked={stockQuery === ''}
          onChange={() => redirect('')}
        />
        <label htmlFor="stock-all">Semua</label>
      </div>
      
      <div className="container">
        <input 
          type="radio" 
          id="stock-available" 
          name="stock" 
          value={FilterStock.Available} 
          checked={stockQuery === FilterStock.Available}
          onChange={() => redirect(FilterStock.Available)}
        />
        <label htmlFor="stock-available">Tersedia</label>
      </div>
    </div>
  )
}

export default Stock
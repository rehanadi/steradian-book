'use client'

import { useState, useCallback } from "react"  
import { useRouter, useSearchParams } from 'next/navigation'
import { createQueryString } from '@/utils/navigation'

const Price = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const minimumPriceQuery = searchParams.get('minimum_price') || ''
  const maximumPriceQuery = searchParams.get('maximum_price') || ''

  const [minimumPrice, setMinimumPrice] = useState(minimumPriceQuery)
  const [maximumPrice, setMaximumPrice] = useState(maximumPriceQuery)

  const queryString = () => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (minimumPrice)
      params.set('minimum_price', minimumPrice)
    else
      params.delete('minimum_price')

    if (maximumPrice)
      params.set('maximum_price', maximumPrice)
    else
      params.delete('maximum_price')
    
    params.delete('page')
  
    return params.toString()
  }
  
  const redirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/?' + queryString())
  }

  return (
    <form className="filter-price" onSubmit={redirect}>
      <div className="price-container">
        <span>Rp</span>
        <input 
          type="number"
          value={minimumPrice}
          onChange={e => setMinimumPrice(e.target.value)} 
          placeholder="Minimum" 
        />
      </div>

      <div className="price-container">
        <span>Rp</span>
        <input 
          type="number"
          value={maximumPrice}
          onChange={e => setMaximumPrice(e.target.value)} 
          placeholder="Maximum" 
        />
      </div>

      <div className="btn-container">
        <button className="btn">
          Filter Harga
        </button>
      </div>
    </form>
  )
}

export default Price
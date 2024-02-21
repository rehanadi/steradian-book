'use client'

import { useState } from "react"  
import { useRouter, useSearchParams } from 'next/navigation'
import Button from '@/components/ui/Button'
import styles from '@/styles/Filter.module.css'

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
    <form className={styles.filterPrice} onSubmit={redirect}>
      <fieldset className={styles.fieldsetPrice}>
        <label htmlFor="minimum-price">Rp</label>
        <input 
          id="minimum-price"
          type="number"
          value={minimumPrice}
          onChange={e => setMinimumPrice(e.target.value)} 
          placeholder="Minimum" 
        />
      </fieldset>

      <fieldset className={styles.fieldsetPrice}>
        <label htmlFor="maximum-price">Rp</label>
        <input 
          id="maximum-price"
          type="number"
          value={maximumPrice}
          onChange={e => setMaximumPrice(e.target.value)} 
          placeholder="Maximum" 
        />
      </fieldset>

      <div className={styles.btnContainer}>
        <Button 
          state='info'
          className={styles.btnFilter}
        >Filter Harga</Button>
      </div>
    </form>
  )
}

export default Price
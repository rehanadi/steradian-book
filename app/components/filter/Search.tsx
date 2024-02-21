'use client'

import { useState, useCallback } from "react"
import { FaSearch } from "react-icons/fa"
import { useRouter, useSearchParams } from 'next/navigation'
import { createQueryString } from '@/utils/navigation'
import Button from '@/components/ui/Button'
import styles from '@/styles/Hero.module.css'

const Search = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const keywordQuery = searchParams.get('keyword') || ''
  const [keyword, setKeyword] = useState(keywordQuery)
  
  const queryString = useCallback(
    (name: string, value: string) => createQueryString(searchParams, name, value),
    [searchParams]
  )

  const redirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/?' + queryString('keyword', keyword))
  }

  return (
    <form onSubmit={redirect}>
      <span className={styles.iconSearch}>
        <FaSearch size={25} />
      </span>

      <input 
        type="text" 
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Cari Judul Buku, Penulis, Penerbit" 
      />

      <Button 
        state='secondary'
        className={styles.btnSearch}
      >Search</Button>
    </form>
  )
}

export default Search
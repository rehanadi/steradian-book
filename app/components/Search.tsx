'use client'

import { useState, useCallback } from "react"
import { useRouter, useSearchParams } from 'next/navigation'
import { createQueryString } from '@/utils/navigation'
import { FaSearch } from "react-icons/fa"

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
      <span>
        <FaSearch size={25} />
      </span>

      <input 
        type="text" 
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Cari Judul Buku, Penulis, Penerbit" 
      />

      <button className="btn-search">Search</button>
    </form>
  )
}

export default Search
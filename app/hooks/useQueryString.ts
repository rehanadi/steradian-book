'use client'

// import { createQueryString } from "@/lib/utils/navigation"
import { useCallback } from "react"

const useQueryString = (searchParams: URLSearchParams, name: string, value: string) => {
  return useCallback(
  (searchParams: URLSearchParams, name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)
    if (name !== 'page') params.delete('page')
  
    return params.toString()
  },
  [searchParams])
}

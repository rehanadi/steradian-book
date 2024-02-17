import type { Filter } from "@/types/books"

export const getFilterParams = (searchParams: URLSearchParams): Filter => {
  return { 
    keyword: searchParams.get('keyword') || '', 
    category: searchParams.get('category') || '', 
    stock: searchParams.get('stock') || '', 
    minimumPrice: searchParams.get('minimum_price') || '', 
    maximumPrice: searchParams.get('maximum_price') || '', 
    sort: searchParams.get('sort') || '', 
    page: searchParams.get('page') || ''
  }
}

export const createQueryString = (searchParams: URLSearchParams, name: string, value: string) => {
  const params = new URLSearchParams(searchParams.toString())
  
  if (value)
    params.set(name, value)
  else
    params.delete(name)
  
  if (name !== 'page') params.delete('page')

  return params.toString()
}

import { type Filter } from "@/types/books"

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

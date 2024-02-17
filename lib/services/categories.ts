import categories from '@/data/categories.json'
import type { Categories } from '@/types/categories'

export const getCategories = (): Categories => {
  return categories
}

export type Book = {
  readonly id: number
  readonly slug: string
  title: string
  author: string
  image: string
  sliced_price: number
  selling_price: number
  description: string
  is_ready_stock: boolean
  category_slug: string
  pages?: number
  publish_date: string
  publisher?: string
  weight?: number
  width?: number
  length?: number
}

export type Books = Book[]

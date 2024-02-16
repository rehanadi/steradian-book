'use client'

import { useGetCategoriesQuery } from "@/lib/store"

const Categories = () => {
  const { data, isLoading } = useGetCategoriesQuery(null)

  if (isLoading) return <h3>Loading...</h3>

  return (
    <ul className="filter-categories">
      <li>
        <span className="active">Semua</span>
      </li>
      <li>
        <span>Diet & Health</span>
      </li>
      <li>
        <span>Social Sciences</span>
      </li>
      <li>
        <span>Dictionary</span>
      </li>
      <li>
        <span>Art & Photography</span>
      </li>
    </ul>
  )
}

export default Categories
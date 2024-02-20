'use client'

import { useRouter } from "next/navigation"

type BreadcrumbFC = React.FC<{ title: string }>

const Breadcrumb: BreadcrumbFC = ({ title }) => {
  const router = useRouter()

  return (
    <section className="breadcrumb">
      <span className="link" onClick={() => router.back()}>« Kembali</span>
      <span>{'/'}</span>
      <span>{title}</span>
    </section>
  )
}

export default Breadcrumb
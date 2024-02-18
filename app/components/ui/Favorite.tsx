'use client'

import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import { FaRegHeart } from 'react-icons/fa'
import { addFavorite, useDispatch } from '@/store/index'

type FavoriteFC = React.FC<{ bookId: number }>

const Favorite: FavoriteFC = ({ bookId }) => {
  const dispatch = useDispatch()
  const { data: session } = useSession()

  const addToFavorite = () => {
    const user = session?.user?.email || null
    // console.log(user, bookId) 
    
    if (!user) return toast.info('Mohon login untuk dapat menambahkan buku favorit')

    dispatch(addFavorite({ user, bookId }))
    toast.success('Buku berhasil ditambahkan ke dalam daftar favorit')
  }

  return (
    <span 
      onClick={addToFavorite}
      className="favorite"
    >
      <FaRegHeart size={75} />
    </span>
  )
}

export default Favorite
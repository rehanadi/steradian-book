'use client'

import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { 
  addFavorite, removeFavorite, existFavorite, useDispatch, useSelector 
} from '@/store/index'

type FavoriteIconFC = React.FC<{ bookId: number }>

const FavoriteIcon: FavoriteIconFC = ({ bookId }) => {
  const { data: session } = useSession()
  const user = session?.user?.email || ''
  
  const dispatch = useDispatch()

  const isFavorite = useSelector(state => existFavorite(state, user, bookId))

  const addToFavorite = () => {
    if (!user) return toast.info('Mohon login untuk dapat menambahkan buku favorit')

    dispatch(addFavorite({ user, bookId }))
    toast.success('Buku berhasil ditambahkan ke dalam daftar favorit')
  }

  const removeFromFavorite = () => {
    if (!user) return toast.info('Mohon login untuk dapat menambahkan buku favorit')

    dispatch(removeFavorite({ user, bookId }))
    toast.success('Buku berhasil dihapus dari dalam daftar favorit')
  }

  return (
    <>
      {isFavorite ? (
        <span 
          onClick={removeFromFavorite}
          className="favorite"
        >
          <FaHeart size={75} />
        </span>  
      ) : (
        <span 
          onClick={addToFavorite}
          className="favorite"
        >
          <FaRegHeart size={75} />
        </span>
      )}
    </>
  )
}

export default FavoriteIcon
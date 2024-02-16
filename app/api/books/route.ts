import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getBooks } from '@/services/books'
import { getFilterParams } from '@/utils/navigation'
import { getErrorMessage } from '@/utils/error'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const filter = getFilterParams(searchParams)
    const filteredBooks = getBooks(filter)
    
    return NextResponse.json({ ...filteredBooks }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: getErrorMessage(err) }, { status: 400 })
  }
}

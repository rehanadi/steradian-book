import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getUserBooks } from '@/services/books'
import { getErrorMessage } from '@/utils/error'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userBookIds: number[] = searchParams.get('book_ids')?.split(',').map(item => Number(item)) || []
    const books = getUserBooks(userBookIds)
    
    return NextResponse.json({ books }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: getErrorMessage(err) }, { status: 400 })
  }
}

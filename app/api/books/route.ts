import { NextResponse } from 'next/server'
import { getBooks } from '@/services/books'
import { errorMessage } from '@/utils/error'

export async function GET() {
  try {
    const books = getBooks()
    
    return NextResponse.json({ books }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: errorMessage(err) }, { status: 400 })
  }
}

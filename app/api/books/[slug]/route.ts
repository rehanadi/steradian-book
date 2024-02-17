import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getBookBySlug } from '@/services/books'
import { getErrorMessage } from '@/utils/error'

export async function GET(
  request: NextRequest, 
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug
    const book = getBookBySlug(slug)
    
    return NextResponse.json({ book }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: getErrorMessage(err) }, { status: 400 })
  }
}

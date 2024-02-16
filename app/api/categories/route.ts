import { NextResponse } from 'next/server'
import { getCategories } from '@/services/categories'
import { getErrorMessage } from '@/utils/error'

export async function GET() {
  try {
    const categories = getCategories()
    
    return NextResponse.json({ categories }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: getErrorMessage(err) }, { status: 400 })
  }
}

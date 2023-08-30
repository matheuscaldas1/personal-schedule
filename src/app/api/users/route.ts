import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const cookieStore = cookies()
  // const token = cookieStore.get('@personalSchedule:userId')
  const res = await request.json()

  const { name, username } = res

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExists) {
    return NextResponse.json('Username already taken.', { status: 400 })
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  cookieStore.set('@personalSchedule:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  return NextResponse.json(user, { status: 201 })
}

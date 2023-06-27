import { Container } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { endpoint } from '@/utils/endpoint'
import { TbArrowBigRightFilled } from 'react-icons/tb'

export async function getRandomQuizQuestion() {
  const data = await fetch(`${endpoint}/quiz/random`, { cache: 'no-store' })

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export default async function Page() {
  const data = await getRandomQuizQuestion()

  return (
        <><h1>YOU FAILED!</h1>
        <Image src="/fail.jpg" width={700} height={700}/><Link
          href={`/quiz/${data.randomQuestion}`}
          className="flex items-center justify-center gap-1 px-5 py-4 font-semibold text-orange-500 transition-colors rounded-md outline duration-600 hover:bg-orange-950"
      >
          <TbArrowBigRightFilled className="text-lg" />
          Battle On!
      </Link></>
  )
}

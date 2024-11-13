import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1 className="text-center text-3xl font-bold my-12 capitalize">about college page</h1>
      <Link href="/about" className="text-center text-blue-500 underline">
        <p>Go back</p>
      </Link>
    </div>
  )
}

export default page
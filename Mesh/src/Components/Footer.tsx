import React from 'react'
import { useState } from 'react'

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())
  return (
    <div className='flex  text-gray-200 text-lg py-3 px-4 mt-10 bg-black rounded'>
      <p>designed by meshackmarteu </p>
      <p className='px-4 items-center'>Copywrite &copy; {year}</p>
    </div>
  )
}


import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between text-gray-200 text-sm sm:text-lg py-3 px-4 mt-10 bg-black rounded gap-2'>
      <p>designed by meshackmarteu</p>
      <p className='sm:px-4 items-center'>Copywrite &copy; {year}</p>
    </div>
  )
}


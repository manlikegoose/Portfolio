import React from 'react'

export default function Contact2() {
  return (
    <form className='w-full max-w-full min-w-0 h-full bg-transparent p-4 sm:p-6 rounded-lg border border-gray-300 shadow shadow-lime-300 hover:shadow-lg transition-all duration-400 box-border'>

      <h1 className='text-xl sm:text-2xl text-purple-400 font-extralight mb-4'>
        let's Connect!
      </h1>

      <div className='flex flex-col sm:flex-row sm:items-start mb-4 text-white gap-2 w-full min-w-0'>
        <label className='block text-sm mt-0 sm:mt-2 sm:min-w-fit' htmlFor='name'>
          NAME:
        </label>

        <input
          className='w-full min-w-0 max-w-full box-border px-4 py-2 rounded-lg border border-gray-300 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400'
          type='text'
          id='name'
          name='name'
          placeholder='Enter your full names'
          required
        />
      </div>

      <div className='flex flex-col sm:flex-row sm:items-start mb-4 text-white gap-2 w-full min-w-0'>
        <label className='block text-sm mt-0 sm:mt-2 sm:min-w-fit' htmlFor='email'>
          EMAIL:
        </label>

        <input
          className='w-full min-w-0 max-w-full box-border px-4 py-2 rounded-lg border border-gray-300 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400'
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email address'
          required
        />
      </div>

      <div className='flex flex-col sm:flex-row sm:items-start mb-4 text-white gap-2 w-full min-w-0'>
        <label className='block text-sm mt-0 sm:mt-2 sm:min-w-fit' htmlFor='message'>
          MESSAGE:
        </label>

        <textarea
          className='w-full min-w-0 max-w-full box-border px-4 py-2 rounded-lg border border-gray-300 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y'
          id='message'
          name='message'
          placeholder='Enter your message'
          rows={4}
          required
        />
      </div>

      <button
        type='submit'
        className='w-full sm:w-auto px-6 py-2 rounded-lg bg-purple-950 text-white hover:bg-purple-700 transition-all duration-300'
      >
        Send Message
      </button>

    </form>
  )
}

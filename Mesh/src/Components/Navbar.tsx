import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGit, FaHome, FaPage4, FaPhone, FaTimes, FaTv, FaUser } from 'react-icons/fa'
import { FaBars, FaGithub, FaNewspaper, FaPen, FaPenNib } from 'react-icons/fa6'



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = (
    <>
      <Link to="/" className="relative flex items-center gap-1 w-fit group">
        <FaHome className='text-lime-100 text-lg hover:text-blue-400' />
        Home
        <span className="absolute left-0 -bottom-1 h-1 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link to="/about" className="relative flex items-center gap-1 w-fit group">
        <FaUser className='text-lime-100 text-lg hover:text-blue-400' />
        About
        <span className="absolute left-0 -bottom-1 h-1 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link to="/education" className="relative flex items-center gap-1 w-fit group">
        <FaPenNib className='text-lime-100 text-lg hover:text-blue-400' />
       Education
        <span className="absolute left-0 -bottom-1 h-1 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </Link>
      
      <Link to="/projects" className="relative flex items-center gap-1 w-fit group">
        <FaTv className='text-lime-100 text-lg hover:text-blue-400' />
        Projects
        <span className="absolute left-0 -bottom-1 h-1 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link to="/resume" className="relative flex items-center gap-1 w-fit group">
        <FaNewspaper className='text-lime-100 text-lg hover:text-blue-400' />
        Resume
        <span className="absolute left-0 -bottom-1 h-1 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </Link>
     
      
       <Link to="/contact" className="relative flex items-center gap-1 w-fit group">
        <FaPhone className='text-lime-100 text-lg hover:text-blue-400' />
        Contact
        <span className="absolute left-0 -bottom-1 h-1 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </>
  )

  return (
<nav className="sticky top-0 z-10 bg-transparent text-blue-300 shadow-md">
      <div className="flex justify-between items-center px-4 h-16">
        
        <Link to='/' className='text-xl font-bold p-4'>

          Dev
          <br></br>
          <strong>
            Mesh
          </strong>

        </Link>
<div className='flex items-center gap-4 mr-4'>


        <div className='hidden md:flex gap-6 text-lg items-center'>
          {navLinks}
        </div>

        <button className='mb-3 p-2 gap-2 flex items-center bg-purple-950 translate-2 rounded text-sm text-white hover:bg-purple-700  hover:translate-y-0 transition-all duration-1000'>
          <Link to='https://github.com/manlikegoose' target='_blank' rel='noopener noreferrer' className='flex items-center gap-1'>
            <FaGithub className='text-lg' />
          </Link>
          GitHub
        </button>
        </div>
        
         <button
          className="md:hidden text-2xl py-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
      <div
        className={`md:hidden flex flex-col items-center gap-4 bg-transparent overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        {navLinks}
      </div>
      
    </nav >

  )
}

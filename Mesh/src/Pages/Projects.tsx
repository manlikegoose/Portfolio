import React from 'react'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import attachhub from '../assets/images/attachhub.png'
import solstice from '../assets/images/solstice.png'
import portfolio from '../assets/images/portfolio.png'
import hairstudio from '../assets/images/hairstudio.png'
import { BsGithub } from 'react-icons/bs'

export default function Projects() {
  const projects = [
    {
      number: '01',
      title: 'AttachHub',
      category: 'University Attachment Management System',
      description:
        'A digital platform that streamlines industrial attachment by connecting students, companies, supervisors, and the university through one trackable workflow.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Django', 'PostgreSQL'],
      image: attachhub,
      github: 'https://github.com/manlikegoose/student-attachmentFlow',
      demo: 'https://attachhub.vercel.app/',
    },
    {
      number: '02',
      title: 'Solstice',
      category: 'Event Check-in Kiosk',
      description:
        'A check-in system designed for a multi-day technology conference, handling attendee QR scanning and badge printing while adapting to changes in the external printing service.',
      technologies: ['Backend', 'REST API', 'QR Code', 'API Integration', 'Testing'],
      image: solstice,
      github: 'https://github.com/manlikegoose/solstice-checkin-service',
      demo: '#',
    },
    {
      number: '03',
      title: 'Mesh Portfolio',
      category: 'Personal Developer Portfolio',
      description:
        'My personal portfolio showcasing my projects, technical skills, education, and experience through a responsive and mobile-first interface.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      image: portfolio,
      github: 'https://github.com/manlikegoose/Portfolio',
      demo: '#',
    },
    {
      number: '04',
      title: 'Hair Studio',
      category: 'Business Website',
      description:
        'A clean website concept created for a hair studio, focused on presenting the business, services, and information through a simple responsive interface.',
      technologies: ['HTML', 'CSS', 'Responsive Design'],
      image: hairstudio,
      github: 'https://github.com/manlikegoose/Project-1-barbershop',
      demo: 'https://ecommerse-react-website-1ls1.vercel.app/',
    },
  ]

  return (
    <section className='min-h-screen w-full px-4 sm:px-6 lg:px-10 py-20 text-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='max-w-3xl mb-14'>
          <p className='text-amber-200 text-sm font-semibold tracking-[0.25em] uppercase mb-4'>
            Selected Work
          </p>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
            Projects I've built
          </h1>

          <p className='text-gray-400 text-base sm:text-lg leading-7 mt-5 max-w-2xl'>
            A collection of projects where I have applied what I learn to
            build practical software, experiment with new technologies, and
            solve real problems.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
          {projects.map((project) => (
            <article
              key={project.number}
              className='group relative overflow-hidden rounded-3xl border border-gray-800 bg-[#111111] transition-all duration-500 hover:-translate-y-2 hover:border-amber-200/40 hover:shadow-2xl'
            >
              <div className='absolute top-5 right-5 z-10 flex items-center gap-2'>
                <span className='text-xs font-medium text-gray-500'>
                  {project.number}
                </span>

                <div className='w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:border-amber-200 group-hover:text-amber-200 transition'>
                  <ArrowUpRight size={17} />
                </div>
              </div>

              {project.image ? (
                <div className='relative w-full h-56 sm:h-72 overflow-hidden bg-gray-900'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover object-top transition duration-700 group-hover:scale-105'
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80' />
                </div>
              ) : (
                <div className='relative w-full h-56 sm:h-72 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black'>
                  <div className='absolute inset-0 opacity-20'>
                    <div className='w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(253,230,138,0.35),_transparent_35%)]' />
                  </div>

                  <div className='absolute bottom-7 left-7'>
                    <span className='text-6xl sm:text-7xl font-bold text-white/10'>
                      {project.number}
                    </span>
                  </div>
                </div>
              )}

              <div className='p-6 sm:p-8'>
                <p className='text-amber-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3'>
                  {project.category}
                </p>

                <h2 className='text-2xl sm:text-3xl font-bold mb-4'>
                  {project.title}
                </h2>

                <p className='text-gray-400 leading-7 text-sm sm:text-base mb-6'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-7'>
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className='px-3 py-1.5 rounded-full border border-gray-700 bg-gray-900 text-gray-300 text-xs sm:text-sm'
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className='flex flex-wrap items-center gap-3'>
                  <a
                    href={project.github}
                    className='inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-700 text-gray-300 hover:border-amber-200 hover:text-amber-200 transition'
                  >
                    <BsGithub size={17} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className='inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-200 text-black font-semibold hover:bg-amber-300 transition'
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
import C from '../assets/images/C++.svg'
import Python from '../assets/images/Python.svg'
import javascript from '../assets/images/javascript.svg'
import Tailwind from '../assets/images/Tailwind.svg'
import ReactLogo from '../assets/images/React.svg'
import typescript from '../assets/images/Typescript.svg'
import Git from '../assets/images/Git.svg'

export default function About2() {
  return (
    <div className='w-full h-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center items-center text-white gap-2 px-3 sm:px-4 py-4'>

      <div className="flex self-center justify-center items-center text-sm sm:text-base m-2 sm:m-3 px-2 sm:px-4 py-2 opacity-90 outline-1 outline-[rgba(200,137,230,0.637)] text-center rounded-3xl shadow-purple-600 overflow-hidden hover:shadow-lg transition-all duration-400 cursor-pointer text-white gap-2">
        <img src={C} alt="C++ logo" className="w-6 h-6 object-contain" />
        <div className="text-sm text-center">C++</div>
      </div>

      <div className="flex self-center justify-center items-center text-sm sm:text-base m-2 sm:m-3 px-2 sm:px-4 py-2 opacity-90 outline-1 outline-[rgba(200,137,230,0.637)] text-center rounded-3xl shadow-purple-600 overflow-hidden hover:shadow-lg transition-all duration-400 cursor-pointer text-white gap-2">
        <img src={Python} alt="Python logo" className="w-6 h-6 object-contain" />
        <div className="text-sm text-center">Python</div>
      </div>

      <div className="flex self-center justify-center items-center text-sm sm:text-base m-2 sm:m-3 px-2 sm:px-4 py-2 opacity-90 outline-1 outline-[rgba(200,137,230,0.637)] text-center rounded-3xl shadow-purple-600 overflow-hidden hover:shadow-lg transition-all duration-400 cursor-pointer text-white gap-2">
        <img src={javascript} alt="JavaScript logo" className="w-6 h-6 object-contain" />
        <div className="text-sm text-center">JavaScript</div>
      </div>

      <div className="flex self-center justify-center items-center text-sm sm:text-base m-2 sm:m-3 px-2 sm:px-4 py-2 opacity-90 outline-1 outline-[rgba(200,137,230,0.637)] text-center rounded-3xl shadow-purple-600 overflow-hidden hover:shadow-lg transition-all duration-400 cursor-pointer text-white gap-2">
        <img src={Tailwind} alt="Tailwind CSS logo" className="w-6 h-6 object-contain" />
        <div className="text-sm text-center">Tailwind CSS</div>
      </div>

      <div className="flex self-center justify-center items-center text-sm sm:text-base m-2 sm:m-3 px-2 sm:px-4 py-2 opacity-90 outline-1 outline-[rgba(200,137,230,0.637)] text-center rounded-3xl shadow-purple-600 overflow-hidden hover:shadow-lg transition-all duration-400 cursor-pointer text-white gap-2">
        <img src={ReactLogo} alt="React logo" className="w-6 h-6 object-contain" />
        <div className="text-sm text-center">React</div>
      </div>

      <div className="flex self-center justify-center items-center text-sm sm:text-base m-2 sm:m-3 px-2 sm:px-4 py-2 opacity-90 outline-1 outline-[rgba(200,137,230,0.637)] text-center rounded-3xl shadow-purple-600 overflow-hidden hover:shadow-lg transition-all duration-400 cursor-pointer text-white gap-2">
        <img src={typescript} alt="TypeScript logo" className="w-6 h-6 object-contain rounded" />
        <div className="text-sm text-center">TypeScript</div>
      </div>

      <div className="flex self-center justify-center items-center text-sm sm:text-base m-2 sm:m-3 px-2 sm:px-4 py-2 opacity-90 outline-1 outline-[rgba(200,137,230,0.637)] text-center rounded-3xl shadow-purple-600 overflow-hidden hover:shadow-lg transition-all duration-400 cursor-pointer text-white gap-2">
        <img src={Git} alt="Git logo" className="w-6 h-6 object-contain" />
        <div className="text-sm text-center">Git</div>
      </div>

    </div>
  )
}
import React from 'react'
import Google from '../assets/images/Google Chrome.svg'
import VisualStudio from '../assets/images/vscode.svg'
import Chatgpt from '../assets/images/chatgpt.webp'
import Hp_logo_2025 from '../assets/images/HP_logo_2025.svg'

export default function AboutTools() {
  return (
    <div className='w-full h-auto  grid grid-cols-3 justify-center items-center text-white gap-2 px-4 py-4 '>
            <div className="flex self-center justify-center text-base m-3 px-4 py-2 opacity-90  outline-1 outline-[rgba(200,137,230,0.637)] text-center rounded-3xl shadow-purple-600 overflow-hidden hover:shadow-lg transition-all duration-400 cursor-pointer text-white gap-2">
              <img src={Google} alt="Google Chrome logo" className="w-6 h-6 object-contain" />
              <div className="mt-2 text-sm text-center">Google Chrome</div>
            </div>
            <div className="flex self-center justify-center text-base m-3 px-4 py-2 opacity-90  outline-1 outline-[rgba(200,137,230,0.637)] text-center rounded-3xl shadow-purple-600 overflow-hidden hover:shadow-lg transition-all duration-400 cursor-pointer text-white gap-2">
              <img src={VisualStudio} alt="Visual Studio logo" className="w-6 h-6 object-contain" />
              <div className="mt-2 text-sm text-center">Visual Studio Code</div>
            </div>
            <div className="flex self-center justify-center text-base m-3 px-4 py-2 opacity-90  outline-1 outline-[rgba(200,137,230,0.637)] text-center rounded-3xl shadow-purple-600 overflow-hidden hover:shadow-lg transition-all duration-400 cursor-pointer text-white gap-2">
              <img src={Chatgpt} alt="ChatGPT logo" className="w-6 h-6 object-contain" />
              <div className="mt-2 text-sm text-center">ChatGPT</div>
            </div>
            <div className="flex self-center justify-center text-base m-3 px-4 py-2 opacity-90  outline-1 outline-[rgba(200,137,230,0.637)] text-center rounded-3xl shadow-purple-600 overflow-hidden hover:shadow-lg transition-all duration-400 cursor-pointer text-white gap-2">
              <img src={Hp_logo_2025} alt="HP logo" className="w-6 h-6 object-contain" />
              <div className="mt-2 text-sm text-center">HP</div>
            </div>

            </div>
  )
}

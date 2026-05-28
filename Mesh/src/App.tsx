
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import About from './Pages/About'
import Education from './Pages/Education'
import Projects from './Pages/Projects'
import Contact from './Pages/Contacts'
import Resume from './Pages/Resume'




function App() {

  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/education' element={<Education />} />
        
        
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        
        <Route path='/resume' element={<Resume />} />
         {/*
        <Route path='/blog' element={<Blog />} />
         
        */}
      </Routes>
      <Footer />
    </BrowserRouter> 
  )
}

export default App

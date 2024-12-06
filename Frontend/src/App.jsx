import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import AI from './pages/AiDoctor'
import VideoConsultant from './pages/VideoConsultant'
import FindDoctor from './pages/FindDoctor'
import MedicalInsights from './pages/MedicalInsights'
import Login from './pages/Login'
import Foot from './Components/Footer/Foot'
import AppointmentDoctors from './pages/AppointmentDoctors'
import Profile from './pages/Profile'


import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
      <Navbar/>

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/FindDoctor' element = {<FindDoctor/>}/>
        <Route path='/FindDoctor/:id' element = {<FindDoctor/>}/>
        <Route path='/AIDoctor' element = {<AI/>}/>
        <Route path='/VideoConsultant' element = {<VideoConsultant/>}/>
        <Route path='/VideoConsultant/doctors' element = {<AppointmentDoctors/>}/>
        <Route path='/VideoConsultant/doctors/:id' element = {<Profile/>}/>
        <Route path='/MedicalConsultant' element = {<MedicalInsights/>}/>
        <Route path='/Login' element = {<Login/>}/>
      </Routes>

      <Foot/>
      
      </BrowserRouter>

      
    </>
  )
}

export default App

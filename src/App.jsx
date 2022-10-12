import { useState } from 'react'
import './App.css'
import {  Route, Routes, useNavigate } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Proyects from './components/Proyects'
import Home from './components/Home'
import Team from './components/Team'
import Error404 from './components/Error404'
import Header from './components/Header'
import Footer from './components/Footer'
import ProyectsById from './components/ProyectsById'
import MainLayout from './components/MainLayout'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const navigate = useNavigate()
  const [isLogged, setIsLogged] = useState(false)
 const handleClick =() =>{
  setIsLogged(true)
  navigate('/Proyects')
 }
  return (
    <div className="App">
    
      <Routes>

        {/*
        <Route  element={<MainLayout/>}>
        <Route  path='/' element={<Home/>} />
        <Route  path='/About' element={<AboutUs/>} />
        <Route  path='/Proyects' element={<Proyects/>} />
        </Route>     
        */}
        <Route path='/Login' element={<button onClick={handleClick}>Login</button>} />
        
         <Route element={<ProtectedRoute isLogged={isLogged}/>}>
         <Route  path='/' element={<Home/>} />
        <Route  path='/About' element={<AboutUs/>} />
        <Route  path='/Proyects' element={<Proyects/>} />
        
         </Route>


        <Route  path='/Proyects/Team' element={<Team/>} />
        <Route  path='/Proyects/:id' element={<ProyectsById/>} />
        <Route  path='*' element={<Error404/>} />
      </Routes>
  
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Proyects from './components/Proyects'
import Home from './components/Home'
import Team from './components/Team'
import Error404 from './components/Error404'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/About' element={<AboutUs/>} />
        <Route  path='/Proyects' element={<Proyects/>} />
        <Route  path='/Proyects/Team' element={<Team/>} />
        <Route  path='*' element={<Error404/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

import React from 'react'
import './assets/style/global.css'
import './assets/style/typography.css'
import Hero from './components/Hero.js'
import Login from './pages/Login.js'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element = {<Hero></Hero>} />
            <Route path='login' element={<Login></Login>} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
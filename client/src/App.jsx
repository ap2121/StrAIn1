import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import React from 'react'
import About from './pages/About'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Desc from './pages/Desc'
import DeletePage from './pages/DeletePage'
import { useAuth0 } from '@auth0/auth0-react'
import MyDesc from './pages/MyDesc'

const App = () => {
  
  const {loginWithPopup, logout, user, isAuthenticated} = useAuth0()
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/newdesc' element={<Desc/>}></Route>
        <Route path='/mydesc' element={<MyDesc/>}></Route>
        <Route path='/confirm/:id' element={<DeletePage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
  )
}

export default App
//import { useState } from 'react'
import { BrowserRouter,Routes, Route, NavLink } from 'react-router-dom'
import Acceuil from './pages/Acceuil'
import Favoris from './pages/Favoris'
import Nude from './pages/Nude'

function App() {
  
  return (
    <BrowserRouter basename='/'>
      <nav className='flex w-full bg-gray-400 text-white justify-center gap-20'>
          <NavLink to='/' end className={({ isActive }) =>`p-3 ${isActive ? 'text-black' : 'text-white'}` }>Acceuil</NavLink>
          <NavLink to='/favoris' className={({ isActive }) =>`p-3 ${isActive ? 'text-black' : 'text-white'}` }>Favoris</NavLink>

          <NavLink to='/nude' className={({ isActive }) =>`p-3 ${isActive ? 'text-black' : 'text-white'}` }>Nude</NavLink>
      </nav>
      <Routes>
        <Route path='*' element={ <Acceuil />} />
        <Route path='/favoris' element={ <Favoris />} />
        <Route path='/nude' element={ <Nude/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App

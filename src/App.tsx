import React from 'react'
import './global.css'
import { Route, Routes } from 'react-router-dom'
import Signinform from './_auth/forms/Signinform'
import {Home} from './_root/pages/Home'
import Signupform from './_auth/forms/Signupform'
import Authlayout from './_auth/Authlayout'
import Rootlayout from './_root/Rootlayout'


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        
        {/* public routes */}
        <Route element={<Authlayout/>} >
          <Route path='/sign-in' element = {<Signinform/>} />
          <Route path='/sign-up' element = {<Signupform/>} />
        </Route>
        
        {/* private routes */}
        <Route element={<Rootlayout/>} >
          <Route index element = {<Home/>} />
        </Route>
        
      </Routes>
    </main>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/Header'
import Herosection from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Github, { githubinfoloader } from './components/Github'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layouts from './Layouts'
import User from './components/User'
import Contactdata from './components/Contactdata'
import { UserContextProvider } from './context/Contextdata'

function App() {
  

  const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element= { <Layouts/>}>
      <Route path='' element= { <Herosection/>}/>
      <Route path='about' element= { <About/>}/>
      <Route path='contact' element= { <Contact/>}/>
      <Route path='contactdata' element= { <Contactdata/>}/>
      <Route
      loader={githubinfoloader} 
      path='github'
      element= { <Github/>}/>
      <Route path=':user' element= { <User/>}/>
    </Route>
   )
)
  
  return (
    <UserContextProvider>
    <RouterProvider router={router}/>
    </UserContextProvider>
  )
}

export default App

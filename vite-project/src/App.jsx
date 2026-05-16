import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Nav from './Navbar.jsx'
import HOME from './Home.jsx'
import Form from './Form.jsx'

function App() {

  return (
    <>
    <Nav></Nav>

    <Routes>
      <Route path="/" element={<HOME></HOME>} />
      <Route path="/Form" element={<Form></Form>}/>
    </Routes>

    
    </>
  )
}

export default App
    
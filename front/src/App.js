import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import List_page from './pages/list_page'
import Add_page from './pages/add'

const App = () => {
  return (
    <div>
      <center>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/list" element={<List_page/>} />
            <Route path='/add' element={<Add_page/>} />
          </Routes>
        </BrowserRouter>
      </center>
    </div>
  )
}

export default App

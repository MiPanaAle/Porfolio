import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Inicio from './pages/Inicio'

function App() {
  return (
    <BrowserRouter>
    <Header />
    </BrowserRouter>
  )
}

export default App;

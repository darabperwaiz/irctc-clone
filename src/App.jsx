import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Forms from "./components/Forms"
import Homepage from "./Pages/Homepage/Homepage"

function App() {
  

  return (
    <>
      <div className="container">
        <Header />
        <Homepage />
      </div>
    </>
  )
}

export default App

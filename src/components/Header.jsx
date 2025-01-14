import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <a href="" className="logo">IRCTC</a>
      <nav>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </nav>
    </header>
  )
}

export default Header

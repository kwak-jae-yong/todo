import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='Header'>
        <h3>오늘 날짜는?📅</h3>
        <h1>{new Date().toDateString()}</h1>
    </header>
  )
}

export default Header
import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import Nav from './Nav'
import Result from './Result'

export default function App() {
  const [selectedOption, setSelectedOption] = useState('')
  return (
    <div className='app'>
      <Header />
      <Nav />
      <Result selectedOption={selectedOption} />
    </div>
  )
}

import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import Nav from './Nav'
import Result from './Result'
import requests from './requests'
import Footer from './Footer'

export default function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return (
    <div className='app'>
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Result selectedOption={selectedOption} />
      <Footer />
    </div>
  )
}

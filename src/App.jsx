import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Cardlist from './components/CardList/Cardlist'
import Chart from './components/Chart/Chart'
import Phone from './components/Phone/Phone'

function App() {
  return(
    <div>
      <Navbar></Navbar>
      <Cardlist></Cardlist>
      <Chart></Chart>
      <Phone></Phone>
    </div>
  )
 
}

export default App

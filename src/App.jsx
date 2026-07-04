import { useState } from 'react'
import "./App.scss"
import Dock from './components/Dock.jsx'
import Nav from './components/Nav.jsx'
import MacWindow from './components/windows/MacWindow.jsx'
import Github from './components/windows/Github.jsx'

function App() {
  
  return (
    <main>
      <Nav />
      <Dock />
      

      <Github />


    </main>
  )
}

export default App

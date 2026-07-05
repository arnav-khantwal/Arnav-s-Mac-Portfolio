import { useState } from 'react'
import "./App.scss"
import Dock from './components/Dock.jsx'
import Nav from './components/Nav.jsx'
import MacWindow from './components/windows/MacWindow.jsx'
import Github from './components/windows/Github.jsx'
import Note from './components/windows/note.jsx'
import Resume from "./components/windows/Resume.jsx"
import Spotify from "./components/windows/Spotify.jsx"
import CLI from "./components/windows/CLI.jsx"

function App() {

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })
  
  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      
      {windowsState.resume &&<Resume windowName="resume"  setWindowsState={setWindowsState} />}

      
      {windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
      
      {windowsState.cli && <CLI windowName="cli" setWindowsState={setWindowsState} />}
      {windowsState.note && <Note windowName="note"  setWindowsState={setWindowsState} />}

    {windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}

    </main>
  )
}

export default App

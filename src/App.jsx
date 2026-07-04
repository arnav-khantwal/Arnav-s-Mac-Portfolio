import "./App.scss"
import Dock from './components/Dock.jsx'
import Nav from './components/Nav.jsx'
import MacWindow from './components/windows/MacWindow.jsx'
import Github from './components/windows/Github.jsx'
import Note from './components/windows/note.jsx'
import Resume from "./components/windows/Resume.jsx"
import Spotify from "./components/windows/Spotify.jsx"

function App() {
  
  return (
    <main>
      <Nav />
      <Dock />
      
      <Note />
      <Resume />

      <Github />

      <Spotify />
    </main>
  )
}

export default App

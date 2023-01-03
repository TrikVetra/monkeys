import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Intro from './components/Intro/Intro'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadText from './components/LoadText/LoadText';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Intro/>
      <LoadText/>
      {/*<WritingArea/>
      <WatchingArea/>
      <Counter/> */}
    </div>
  )
}

export default App

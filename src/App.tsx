import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Intro from './components/Intro/Intro'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadText from './components/LoadText/LoadText';
import WatchingArea from './components/WatchingArea/WatchingArea';
import WritingArea from './components/WritingArea/WritingArea';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Counter from './components/Counter/Counter';
import Laziness from './components/Laziness/Laziness';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div >
      <Counter/>
      <Intro/>      
      <LoadText/>
      <Laziness/>
      <h2>Опубликовать проект на Pages</h2>
      <Row>
        <Col>          
          <WritingArea/>
        </Col>
        <Col>          
          <WatchingArea/>
        </Col>
        
      </Row>
      
    </div>
  )
}

export default App

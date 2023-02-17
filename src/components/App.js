import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
  //code here
  let [square, setSquare] = useState(0);

  return (
    <div id="main">
      <ChildComponent setSquare={setSquare} />     
      <p id='output'>{square}</p>
    </div>
  )
}


export default App;

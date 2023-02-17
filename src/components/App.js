import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
  //code here
  let [square, setSquare] = useState(0);
  const findSquare = (event)=>{
    let value = event.target.value;
    // console.log(value);
    setSquare(value*value);
  }
  return (
    <div id="main">
      <ChildComponent /> 
        <input id='input' onChange={findSquare} />
    
      <p id='output'>{square}</p>
    </div>
  )
}


export default App;

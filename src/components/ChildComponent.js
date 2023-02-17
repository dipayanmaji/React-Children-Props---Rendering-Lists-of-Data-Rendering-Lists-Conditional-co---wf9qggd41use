import React from 'react'

const ChildComponent = ({setSquare}) => {
  //code here
  const findSquare = (event)=>{
  let value = event.target.value;
  setSquare(value*value);
}
  return (
    <div id="child">
      Find The Square <br/>
      <input id='input' onChange={findSquare} />
     
    </div>
  )
}


export default ChildComponent;
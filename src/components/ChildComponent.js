import React from 'react'

const ChildComponent = (props) => {
  //code here
  let setSquare = props.setSquare;
  const findSquare = (event)=>{
  let value = event.target.value;
  // console.log(value);
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
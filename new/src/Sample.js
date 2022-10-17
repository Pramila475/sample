import React, { useEffect } from 'react'

const Sample = (props) => {
  useEffect(()=>{
        console.log('a',props.name);

  } ,[props.name])

  ;
  function shoot(){
    alert("Great Shot!");
  }
  return (
    <div>
      <button onClick={shoot}>Take the shot!</button>
    </div>
  )
};

export default Sample

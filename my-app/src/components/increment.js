import React from 'react';

export  function ButtonIncrement(props) {
   
  return ( 
    <div>
        {props.count} <br/> 
        <button  onClick={props.incrementCounter}>INCREMENT</button>
    </div>
    
  );
}

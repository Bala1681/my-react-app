import React from 'react';

export  function ButtonDecrement(props) {
   
  return ( 
    <div>
        {}       
        <button  onClick={props.decrementCounter}>Decrement</button>
    </div>
    
  );
}
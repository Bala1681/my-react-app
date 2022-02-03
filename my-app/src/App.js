import React, {useState} from 'react';
import { ButtonIncrement } from './components/increment';
import { ButtonDecrement } from './components/decrement';
import { ButtonReset } from './components/reset';



export default function App() {
  const [count, setCount]=useState(0); 
  const incrementCounter = () => setCount(count + 1);
  const decrementCounter = () => setCount(count -1);
  let reset = () => setCount(0);
       
  return (
    <div>
      

      <ButtonIncrement count={count} incrementCounter={incrementCounter}>INCREMENT</ButtonIncrement>
      <ButtonDecrement count={count} decrementCounter={decrementCounter}>DECREMENT</ButtonDecrement>
      <ButtonReset count={0} reset={reset}>RESET</ButtonReset>
    </div>
    
  );
  
}




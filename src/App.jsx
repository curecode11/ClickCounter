import './App.css'
import { useState } from 'react'
import Heading from './Heading'
import Button from './Button'
import Show from './Show';
import Reduce from './Reduce';
function App() {
  let[count,setCount]=useState(0);
  function handle(){
      setCount(count+1);
      
    console.log(count);
    // console.log(elem)
    
    }
    function handle1(){
    if(count>0){
      setCount(count-1);
    }
    console.log(count);
  }
  return (
    <>
    

    <Heading></Heading>
    <marquee behavior="" direction="">Welcome to Click Counter</marquee>
    <Show cnt={count}></Show>
    <Button handle={handle}></Button>
    <Reduce handle={handle1}></Reduce>
    </>
  )
}

export default App

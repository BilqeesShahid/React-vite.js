import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  let myObj={
    name:'Teacher',
    age:25
  }
let newArr=[1,2,3]
  return (
    <>
       <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind test</h1>
      <Card name='Teacher' btnText='Visit me'/>
   

    
    </>
  )
}

export default App

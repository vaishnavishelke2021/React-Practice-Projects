import React from 'react'
import Random from './Components/Random'
import Custom from './Components/Custom'

function App() {
  return (
    <div>
      <h1 className='bg-[#c3989800] text-[#f8f8f8] text-center text-3xl font-bold py-8'>Random GIF Generator</h1>

      <div className='mx-auto mt-16 flex w-[80%] justify-evenly'>
        <Random/>
        <Custom/>
      </div>
    </div>
  ) 
}

export default App

import React from 'react'
import Card from './Components/Card'
import data from './Utils/mockdata.json'

function App() {
  return (
    <div>
      <div className=''>
        <h1 className='text-slate-100 mx-auto w-fit  text-center px-8 py-3 mt-16 tracking-normal rounded-md bg-zinc-800/60 text-[1.9rem]  font-poetsen [word-spacing:5px] shadow-lg'>Plan With Love </h1>
        <div className='mt-3 w-[90%] py-12 flex flex-wrap gap-10 justify-center mx-auto'>
          
          {
            data.map((card)=>(
              <Card key={card.id} data={card} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App

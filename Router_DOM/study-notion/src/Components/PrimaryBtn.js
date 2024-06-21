import React from 'react'

function PrimaryBtn({name}) {
  return (
    <div>
      <button className=' bg-white/10 px-4 py-[5px] rounded-sm font-normal shadow-sm hover:bg-white/90 transition-all duration-300  hover:text-black hover:cursor-pointer text-white/70'>{name}</button>
    </div>
  )
}

export default PrimaryBtn

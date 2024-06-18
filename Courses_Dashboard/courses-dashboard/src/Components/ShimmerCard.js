import React from 'react'

function ShimmerCard() {
  return (
    <div>
      <div className=" relative w-[250px] h-[280px] bg-black/0 rounded-[4px]">
        <div className="w-full rounded-md h-[150px] bg-black/10"></div>
        <div className="w-full rounded-md h-[17px] bg-black/10 mt-3"></div>
        <div className="w-full rounded-md h-[10px] bg-black/10 mt-3"></div>
        <div className="w-full rounded-md h-[10px] bg-black/10 mt-2"></div>
        <div className="w-[70%] rounded-md h-[10px] bg-black/10 mt-2"></div>
      </div>
    </div>
  )
}

export default ShimmerCard

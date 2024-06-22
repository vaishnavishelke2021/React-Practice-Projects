import React from 'react'

function Custom() {
  return (
    <div className='w-[35%] bg-[#95d2b41b] shadow-md p-4 gap-y-2 flex flex-col justify-center items-center rounded-md'>
       <h1 className='text-[#f6f6f6] text-2xl font-semibold '>Custom GIF</h1>
       <div className='w-full h-[17rem] mt-3 flex justify-center items-center'>
        <img className='h-full' src="https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1" alt="" />
       </div>
       <input className='w-full py-1 px-3 mt-4 bg-white rounded-sm' placeholder='Enter here...' type="text" />
       <button className='bg-[#C39898] w-full py-1 text-white text-[1.2rem] font-semibold'>Generate</button>
    </div>
  )
}

export default Custom

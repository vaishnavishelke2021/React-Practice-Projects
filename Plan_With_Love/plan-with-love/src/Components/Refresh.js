import React from 'react'

function Refresh({data, setFilterCard}) {
  return (
    <div>
      <div className="mt-6 w-[90%] min-h-[70vh] py-4 bg-zinc-800 rounded-sm flex flex-col flex-wrap justify-center items-center mx-auto">
      <h1 className="text-lg font-semibold text-white/80">No Tours Left</h1>
      <button
        onClick={() => setFilterCard(data)}
        className="mt-4 font-medium hover:bg-zinc-950 transition-all  px-4 py-1 bg-zinc-700 text-slate-300 text-sm rounded-sm"
      >
        Refresh
      </button>
    </div>
    </div>
  )
}

export default Refresh

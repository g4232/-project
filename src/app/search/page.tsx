"use client"
import React from 'react'

export default function search() {
  return (
    <div className='flex w-full h-full'>
      <div className='flex-col bg-red-100 w-[50%] relative'>
        <div className='flex justify-center items-center mt-[40%]'>
          <input type="text" className="border-spacing-40 shadow-lg h-10 rounded-e-md" />
        </div>
        <div className='flex justify-center items-center mt-5'>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
        </div>


      </div>
      <div className=' h-full w-[50%] relative'>
        <textarea id="story" name="story" rows={10} cols={92} value={"some answer"} readOnly maxLength={100} 
        className="resize-none border-spacing-7 border-red-500 border-collapse shadow-lg shadow-emerald-100"
        />
        <button type="button" className="bg-slate-500 rounded-lg w-20 h-10 text-white font-bold hover:bg-slate-600 absolute right-0 top-[28%]">copy</button>
        <div className='w-full bg-red-400 h-20'></div>
      </div>
    </div>
  )
}


"use client"
import React, { useCallback, useRef, useState } from 'react'
import { OpenaiService } from '@/lib/actions'
import Image from 'next/image'
import MessageBox from '@/ui/messageBox'
export default function search() {
  const [active,setActive] = useState(false)
  const [value, setValue] = useState('一些回答在这。。。')
  const inputRef = useRef<HTMLInputElement>(null)
  const areaRef = useRef<HTMLTextAreaElement>(null)
  const Clicked = useCallback(async () => {
    console.log(inputRef.current?.value);
    const res = OpenaiService(inputRef.current!.value)
    setValue((await res).content as string)
  }, [])
  return (
    <div className='flex w-full h-full'>
      <div className='grid grid-rows-3 text-center w-[48%] relative ml-[2%]'>
        <div className='relative mt-10'>
          <textarea id="story" ref={areaRef} name="story" rows={10} cols={92} value={value} readOnly maxLength={100}
            className="w-[90%] h-[100%] resize-none border-spacing-7 border-red-500 border-collapse shadow-lg shadow-emerald-100 outline outline-slate-400 rounded-md"
          />
          <button type="button" onClick={()=>{areaRef.current?.select() ;document.execCommand("copy"); setActive(true);setInterval(()=>{setActive(false)},3000) }} className="bg-slate-500 w-10 h-5 text-white font-bold hover:bg-slate-600 absolute right-[5%] bottom-0 opacity-45">复制</button>
          <MessageBox msg='复制成功！' active={active}/>
        </div>
        <div className='mt-5'>
          <div className='flex justify-center'>
          <input type="text" ref={inputRef} placeholder='search' className="border-spacing-40 shadow-lg h-10 rounded-md outline outline-orange-400" />
          </div>
          <div className='flex justify-center mt-2'>
          <button type="button" onClick={Clicked} className="px-3 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
          </div>
        </div>
      </div>
      <div className=' h-full w-[50%] relative'>
          <Image src={"/woman.jpg"} alt='woman' width={900} height={250} className='w-full h-[80%] object-cover rounded-lg hover:saturate-150 transition-all duration-200'/>
        <div className='w-full h-20'></div>
      </div>
    </div>
  )
}


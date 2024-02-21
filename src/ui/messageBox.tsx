import { useEffect, useState } from 'react'

export default function MessageBox({msg,active}:{msg:string,active:boolean}) {

  return (
    <div className={`${active?"flex":"hidden"} outline outline-lime-600 absolute bottom-0 left-[50%] text-blue-400 text-xl`}>{msg}</div>
  )
}

"use client"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Fisheye } from '@react-three/drei'
import { Model } from '@/ui/model'
import Image from 'next/image'
import { FaBookOpen ,FaFileWord,FaRegLightbulb  } from "react-icons/fa";
import { ma_shan_zheng, zcool } from "@/ui/font"
import CountUp from 'react-countup'
import { Suspense } from 'react'
import Canvasskeleton from '@/ui/skeletons'
import Link from 'next/link'
export default function Home() {
  const randomValue = Math.random() * 1000 + 6000;
  return (
    <div className="h-full flex">
      <div className='ml-[10%] mr-[10%] relative w-[40%] h-[80%] text-center flex-col items-center border-spacing-6 shadow hover:shadow-orange-500 hover:shadow-md'>
        <div className='flex justify-center items-center'>
          <Image src={"/hreo.png"} width={200} height={200} alt='hreo' className="block rounded-[100%] hover:grayscale-5 shadow-lg shadow-blue-400 hover:saturate-150" />
        </div>
        <h2 className={`${ma_shan_zheng.className} text-7xl`}>工具合集</h2>
        <p className={ma_shan_zheng.className}>专注于便学工具</p>
        <p className={zcool.className}>当前用户数:<CountUp start={0} end={randomValue} duration={3} className='text-3xl text-orange-600 font-bold' /></p>
        <div className='bottom-0 flex w-full bg-slate-200 h-10 absolute justify-around items-center'>
          <Link href="/search" className='font-bold hover:bg-orange-400 h-full leading-10 flex-1'><FaBookOpen className='inline-block mr-2 '/>知识问答</Link>
          <Link href="/about" className='font-bold hover:bg-orange-400 h-full leading-10 flex-1'><FaFileWord className='inline-block mr-2 '/>文件互转</Link>
          <Link href="#" className='font-bold hover:bg-orange-400 h-full leading-10 flex-1'><FaRegLightbulb className='inline-block mr-2 '/>其他</Link>
        </div>
      </div>
      <div className='w-[50%] h-[80%]'>
        <Suspense fallback={<Canvasskeleton />}>
          <Canvas shadows className='rounded-2xl'>
            <Fisheye>
              <Environment files={"/sun.hdr"} ground={{ scale: 100 }} />
              <Model />
            </Fisheye>
            <OrbitControls enableDamping={true} enableZoom={false} enableRotate={false} />
          </Canvas>
        </Suspense>
      </div> 

    </div >
  )
}
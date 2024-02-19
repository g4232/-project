"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import React from 'react'
import { useRef } from "react"
import { Mesh } from "three"
export default function Frame() {
  const boxRef = useRef<Mesh>(null!)
  useFrame((state, delay) => {
    boxRef.current.rotation.y += delay;
  })
  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color='hotpink' wireframe={true}/>
    </mesh>
  )
}

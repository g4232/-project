"use client"
import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
export function Model(props) {
  const group = useRef();
  const robot = useRef();
  const [mousePos, setMousePos] = useState({});
  const three = useThree()
  three.camera.position.y = 2
  useFrame((state, delay) => {
    robot.current.rotation.z = 5*Math.sin(mousePos.x *.001)
  })
  const { nodes, materials, animations, scene } = useGLTF("/Soldier.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    actions.Idle.play()
    scene.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))
    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, [actions, scene])
  const pointerHover = () => {
    actions.Idle.stop()
    actions.Run.play()
  }
  const pointOut = () => {
    actions.Idle.play()
    actions.Run.stop()
  }
  console.log(actions);
  return (
    <group ref={group} {...props} dispose={null} onPointerOver={pointerHover} onPointerOut={pointOut}>
      <group name="Scene">
        <group name="Character" rotation={[-Math.PI / 2, 0, -Math.PI/2]} scale={0.045} position={[0, -1.5, 0]} ref={robot}>
          <skinnedMesh
            name="vanguard_Mesh"
            geometry={nodes.vanguard_Mesh.geometry}
            material={materials.VanguardBodyMat}
            skeleton={nodes.vanguard_Mesh.skeleton}
          />
          <skinnedMesh
            name="vanguard_visor"
            geometry={nodes.vanguard_visor.geometry}
            material={materials.Vanguard_VisorMat}
            skeleton={nodes.vanguard_visor.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />

        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Soldier.glb");

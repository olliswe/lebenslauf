import React, {useRef} from 'react'
import {useFrame, useLoader, useThree} from 'react-three-fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

const pi = Math.PI

const AMPLITUDE = 200
const SPEED = 2

const Model = ({offset}:{offset:number}) =>{
  const group = useRef<any>()
  const { nodes, materials } = useLoader<any>(GLTFLoader, 'shoes/scene.gltf')
  const {clock} = useThree()


  useFrame(() => {
      group.current.rotation.z += offset* Math.sin(clock.getElapsedTime()*SPEED)/AMPLITUDE;
      group.current.position.y += offset* Math.sin(clock.getElapsedTime()*SPEED)/AMPLITUDE
  });
  return (
    <group ref={group} dispose={null} position={[(1-offset)*1.2,1,0]} rotation={[0,pi/2,0]}>
          <mesh castShadow material={materials.Sheos} geometry={nodes.mesh_0.geometry} />
    </group>
  )
}

export default Model

import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useLoader, useUpdate } from 'react-three-fiber'

const Text = ({ children, vAlign = 'center', hAlign = 'left', size = 1, color = '#000000', ...props }:any) => {
    const font = useLoader(THREE.FontLoader, '/bold.blob')
    const config = useMemo(
        () => ({ font, size: 40, height: 2, curveSegments: 32, bevelEnabled: false, bevelThickness: 6, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8}),
        [font]
    )
    const mesh = useUpdate(
        (self:any) => {
            const size = new THREE.Vector3()
            self.geometry.computeBoundingBox()
            self.geometry.boundingBox.getSize(size)
            self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
            self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
        },
        [children]
    )
    return (
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.2]} >
            <mesh ref={mesh} castShadow>
                <textGeometry attach="geometry" args={[children, config]} />
                <meshPhongMaterial attach="material" color="#F76C6C"/>
            </mesh>
        </group>
    )
}

export default Text

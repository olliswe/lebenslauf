import React, {Suspense} from 'react';
import {Canvas} from "react-three-fiber";
import Text from './Text'
import Model from "./Model";
// import {OrbitControls} from 'drei'

const CompleteModel = () => {
    return (
        <div style={{height:'100%'}}>
        <Canvas shadowMap pixelRatio={window.devicePixelRatio} camera={{ position: [-10, 10, 20], fov: 50 }}>
            <directionalLight
                position={[5, 8, 9.8]}
                intensity={1}
                castShadow
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <directionalLight position={[5, 8, -10]} intensity={1} />
            <directionalLight position={[-10, 0, 10]} />
            <Suspense fallback={null}>
                <Text  position={[-1, 0.8, 0]} size={0.5}>LEBENS</Text>
                <Text  position={[8.5, 0.8, 0]} size={0.5}>LAUF</Text>
                <Model offset={1}/>
                <Model offset={-1}/>
            </Suspense>
            <mesh receiveShadow rotation-x={-Math.PI / 2}>
                <planeBufferGeometry attach="geometry" args={[50, 50]} />
                <shadowMaterial attach="material" transparent opacity={0.4} />
            </mesh>
            {/*<OrbitControls/>*/}
        </Canvas>
        </div>
    );
};

export default CompleteModel;

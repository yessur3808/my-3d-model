import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Me';
import './App.css'

export default function App() {



   return (
      <Canvas
         camera={{ position: [5, 2, 20], fov: 18 }}
         className="mainScene"
         style={{
            backgroundColor: 'rgba(0,0,0,0)',
            width: '100vw',
            height: '100vh',
         }}
      >


{/* background: rgb(2,0,36); */}
{/* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 86%, rgba(0,100,120,1) 100%); */}
         


         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 0]} />
         </Suspense>
         <OrbitControls />
      </Canvas>
   );
}
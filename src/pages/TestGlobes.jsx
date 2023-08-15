import { Suspense } from 'react';
import { Earth } from '../components/globes/earth';
import { Canvas } from '@react-three/fiber';
import { Mars } from '../components/globes/mars';

export default function TestGlobes() {
    return (
        <>
        <div>TestGlobesPage</div>
        
        <div style={{backgroundColor:"black", height:'30rem'}}>
        <Canvas>
            <Suspense fallback={null}>
                <Earth/> 
            </Suspense>
        </Canvas>
        </div>
    
        <div style={{backgroundColor:"black", height:'30rem'}}>
        <Canvas>
            <Suspense fallback={null}>
                <Mars/>
            </Suspense>
        </Canvas>
        </div>
    </>
    )
}

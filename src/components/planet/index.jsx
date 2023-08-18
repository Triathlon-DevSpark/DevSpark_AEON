import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, DoubleSide } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";

// ThreeJS Planet Component
export function Planet({ planetProperties }) {
    // Object destructuring
    const { planetMap, planetNormalMap, planetCloudsMap, planetSpecularMap, planetScale = [2.8, 2.8, 2.8], // Default scale if not provided
} = planetProperties

    // if all 4 properties are there
    if (planetMap && planetNormalMap && planetCloudsMap && planetSpecularMap) {
        const planetRef = useRef();
        const cloudsRef = useRef();

        useFrame(({ clock }) => {
            const elapsedTime = clock.getElapsedTime();
            planetRef.current.rotation.y = elapsedTime / 24;
            cloudsRef.current.rotation.y = elapsedTime / 12;
        });

        const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [planetMap, planetNormalMap, planetSpecularMap, planetCloudsMap]);

        return (
            <>
                <Stars radius={300} depth={60} count={10000} factor={7} saturation={0} fade={true} />
                <ambientLight intensity={1.2} />
                <pointLight color="#f6f3ea" position={[2.5, 1, 2.5]} intensity={1.2} />
                <mesh ref={cloudsRef} scale={planetScale}>
                    <sphereGeometry args={[1.005, 32, 32]} />
                    <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={DoubleSide} />
                </mesh>
                <mesh ref={planetRef} scale={planetScale}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshPhongMaterial specularMap={specularMap} />
                    <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
                </mesh>
                <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} 
              />
            </>
        );
    }

    // if only 3 properties are there
    if (planetMap && planetNormalMap && planetSpecularMap) {
        const planetRef = useRef();
        const cloudsRef = useRef();

        useFrame(({ clock }) => {
            const elapsedTime = clock.getElapsedTime();
            planetRef.current.rotation.y = elapsedTime / 24;
            cloudsRef.current.rotation.y = elapsedTime / 12;
        });

        const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [planetMap, planetNormalMap, planetSpecularMap]);

        return (
            <>
                <Stars radius={300} depth={60} count={10000} factor={7} saturation={0} fade={true} />
                <ambientLight intensity={1.2} />
                <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
                <mesh ref={cloudsRef} scale={planetScale}>
                    <sphereGeometry args={[1.005, 32, 32]} />
                    <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={DoubleSide} />
                </mesh>
                <mesh ref={planetRef} scale={planetScale}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshPhongMaterial specularMap={specularMap} />
                    <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
                    <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
                </mesh>
            </>
        );
    }

    // if only 2 property is there
    if (planetMap && planetNormalMap) {
        const planetRef = useRef();
        const cloudsRef = useRef();

        useFrame(({ clock }) => {
            const elapsedTime = clock.getElapsedTime();
            planetRef.current.rotation.y = elapsedTime / 24;
            cloudsRef.current.rotation.y = elapsedTime / 12;
        });

        const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [planetMap, planetNormalMap]);

        return (
            <>
                <ambientLight intensity={1.2} />
                <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
                <mesh ref={cloudsRef} scale={planetScale}>
                    <sphereGeometry args={[1.005, 32, 32]} />
                    <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={DoubleSide} />
                </mesh>
                <mesh ref={planetRef} scale={planetScale}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshPhongMaterial specularMap={specularMap} />
                    <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
                    <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
                </mesh>
            </>
        );
    }

    // Default (if only 1 property is there)
    const planetRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        planetRef.current.rotation.y = elapsedTime / 24;
    });

    const [colorMap] = useLoader(TextureLoader, [planetMap]);

    return (
        <>
            <Stars radius={300} depth={60} count={10000} factor={6} saturation={0} fade={true} />
            <ambientLight intensity={1} />
            <pointLight color="#f6f3ea" position={[2.5, 1, 2.5]} intensity={1.2} />
            <mesh ref={planetRef} scale={planetScale}>
                <sphereGeometry args={[1, 32, 32] } />
                <meshStandardMaterial map={colorMap} metalness={0.4} roughness={0.7} />
                <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
            </mesh>
        </>
    );
}
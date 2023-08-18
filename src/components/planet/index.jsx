import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, DoubleSide } from "three";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

// ThreeJS Planet Component
export function Planet({ planetProperties }) {
    // Object destructuring
    const { planetMap, planetNormalMap, planetCloudsMap, planetSpecularMap } = planetProperties

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
                <ambientLight intensity={1.2} />
                <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
                <mesh ref={cloudsRef}>
                    <sphereGeometry args={[1.005, 32, 32]} />
                    <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={DoubleSide} />
                </mesh>
                <mesh ref={planetRef}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshPhongMaterial specularMap={specularMap} />
                    <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
                    <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
                </mesh>
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
                <ambientLight intensity={1.2} />
                <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
                <mesh ref={cloudsRef}>
                    <sphereGeometry args={[1.005, 32, 32]} />
                    <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={DoubleSide} />
                </mesh>
                <mesh ref={planetRef}>
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
                <mesh ref={cloudsRef}>
                    <sphereGeometry args={[1.005, 32, 32]} />
                    <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={DoubleSide} />
                </mesh>
                <mesh ref={planetRef}>
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
    const cloudsRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        planetRef.current.rotation.y = elapsedTime / 24;
        cloudsRef.current.rotation.y = elapsedTime / 12;
    });

    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [planetMap]);

    return (
        <>
            <ambientLight intensity={1.2} />
            <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
            <mesh ref={cloudsRef}>
                <sphereGeometry args={[1.005, 32, 32]} />
                <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={DoubleSide} />
            </mesh>
            <mesh ref={planetRef}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
                <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
            </mesh>
        </>
    );
}
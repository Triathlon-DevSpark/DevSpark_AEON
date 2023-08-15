import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, DoubleSide } from "three";
import { OrbitControls } from "@react-three/drei";

import MarsMap from "../../../resources/globe-textures/2k_mars.jpg";

export function Mars(props) {

  const [colorMap] = useLoader(TextureLoader, [MarsMap]);

  const marsRef = React.useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    marsRef.current.rotation.y = elapsedTime / 24;
  });
  return (
    <>
    <ambientLight intensity={1.2} />
    <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
    {/* <mesh ref={cloudsRef}>
      <sphereGeometry args={[1.005, 32, 32]} />
      <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={DoubleSide} />
    </mesh> */}
    <mesh ref={marsRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial color="red"/>   
      <meshStandardMaterial map={colorMap} metalness={0.4} roughness={0.7}/>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4}/>
    </mesh>
    </>
  );
}
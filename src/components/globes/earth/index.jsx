import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, DoubleSide } from "three";
import { OrbitControls } from "@react-three/drei";

// Importing the globe textures
import EarthDayMap from "../../../resources/globe-textures/8k_earth_daymap.jpg";
import EarthNightMap from "../../../resources/globe-textures/8k_earth_nightmap.jpg";
import EarthNormalMap from "../../../resources/globe-textures/8k_earth_normal_map.jpg";
import EarthCloudsMap from "../../../resources/globe-textures/8k_earth_clouds.jpg";
import EarthSpecularMap from "../../../resources/globe-textures/8k_earth_specular_map.jpg";

export function Earth(props) {

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);

  const earthRef = React.useRef();
  const cloudsRef = React.useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 24;
    cloudsRef.current.rotation.y = elapsedTime / 12;
  });
  return (
    <>
    <ambientLight intensity={1.2} />
    <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
    <mesh ref={cloudsRef}>
      <sphereGeometry args={[1.005, 32, 32]} />
      <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={DoubleSide} />
    </mesh>
    <mesh ref={earthRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial specularMap={specularMap}/>   
      <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7}/>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4}/>
    </mesh>
    </>
  );
}
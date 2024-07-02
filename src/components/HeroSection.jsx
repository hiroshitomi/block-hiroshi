import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, SpotLight } from "@react-three/drei";
import Box from "./Box";



const HeroSection = () => {
  return (
    <Canvas className="heroSection">
      {/* <ambientLight/> */}
      <SpotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      {/* <pointLight position={[-10, -10, -10]} /> */}
      <Box position={[0, 0, 0]} />
      <Environment background backgroundIntensity={0.2} backgroundBlurriness={1} preset="dawn" />
      <OrbitControls />
    </Canvas>
  );
};

export default HeroSection;

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = (props) => {
    const ref = useRef();
    const texture = useTexture("/metal1.avif");
    useFrame(
      (state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta)
    );
    return (
      <mesh ref={ref} {...props}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshPhysicalMaterial
          map={texture}
          clearcoat={1}
          metalness={0.5}
        />
      </mesh>
    );
}

export default Box
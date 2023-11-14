import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function Box(props) {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color={props.color} />
    </mesh>
  );
}
const Card = (props) => {
  return (
    <>
        <div className="left-container">
          <Canvas>
            <OrbitControls />
            <Stars />
            <Box color={props.color} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
          </Canvas>
        </div>
        <div className="right-container">
          <Canvas>
            <OrbitControls />
            <Stars />
            <Box color={props.color2}/>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
          </Canvas>
        </div>
    </>
  );
};

export default Card;

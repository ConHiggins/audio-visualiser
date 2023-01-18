import logo from "./logo.svg";
import "./App.css";
import Sphere from "./Components/Sphere/Sphere.jsx";
import { Canvas, useFrame } from "react-three-fiber";

function App() {
    return (
        <Canvas dpr={[1, 2]} camera={{ fov: 25 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 5]} />
            <pointLight position={[-10, -10, -5]} />
            <Sphere />
        </Canvas>
    );
}

export default App;

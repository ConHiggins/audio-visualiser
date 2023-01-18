import logo from "./logo.svg";
import "./App.css";
import { ReactDOM } from "react-dom";
import Sphere from "./Components/Sphere/Sphere.jsx";
import { Canvas, useFrame } from "react-three-fiber";

function App() {
    return (
        <Canvas>
            <Sphere />
        </Canvas>
    );
}

export default App;

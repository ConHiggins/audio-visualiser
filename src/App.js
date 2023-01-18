import logo from "./logo.svg";
import "./App.css";
import Sphere from "./Components/Sphere/Sphere.jsx";
import { Canvas, useFrame } from "react-three-fiber";
import React, { useRef, useState, useMemo } from "react";

function App() {
    const coords = [0.1, 0.4, 0.3, 0.2, 1, 2, 0.5, 0.1, 0.05]; /// TODO: This will be a frequency heightmap from an audio file
    const [index, setIndex] = useState(0);
    const [currentX, setCurrentX] = useState(coords[index]);
    return (
        <>
            <button
                onClick={() => {
                    index >= coords.length - 1 ? setIndex(0) : setIndex(index + 1);
                    setCurrentX(coords[index]);
                }}
            >
                Current X{" "}
            </button>
            <Canvas dpr={[1, 2]} camera={{ fov: 25 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 5]} />
                <pointLight position={[-10, -10, -5]} />
                <Sphere currentX={currentX} />
            </Canvas>
        </>
    );
}

export default App;

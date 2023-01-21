import logo from "./logo.svg";
import "./App.css";
import Sphere from "./Components/Sphere/Sphere.jsx";
import { Canvas, useFrame } from "react-three-fiber";
import React, { useRef, useState, useMemo } from "react";
import audioImport from "./Assets/Billie Eilish - Bossa Nova (Lewii Edit).mp3";

function App() {
    let audio1 = new Audio(audioImport);
    const coords = [1, 2, 3]; /// TODO: This will be a frequency heightmap from an audio file
    const [index, setIndex] = useState(0);
    const [currentX, setCurrentX] = useState(coords[index]);
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let audioSource = null;
    let analyser = null;
    let bufferLength = null;
    let dataArray = null;

    audio1.load();

    const getAudioData = (audio) => {
        if (!audioSource) {
            audioSource = audioCtx.createMediaElementSource(audio);
        }
        analyser = audioCtx.createAnalyser();
        audioSource.connect(analyser);
        analyser.connect(audioCtx.destination);

        analyser.fftSize = 2048;
        bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
        analyser.getByteTimeDomainData(dataArray);

        setInterval(() => {
            analyser.getByteTimeDomainData(dataArray);
            setCurrentX(dataArray[0] * 0.01);
            console.log(dataArray);
        }, 10);
    };

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
            <button
                onClick={() => {
                    audio1.play();
                    getAudioData(audio1);
                }}
            >
                play
            </button>
            <button
                onClick={() => {
                    audio1.pause();
                }}
            >
                pause
            </button>
            <button
                onClick={() => {
                    getAudioData(audio1);
                }}
            >
                Data
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

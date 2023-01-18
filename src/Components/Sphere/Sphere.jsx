import React, { useRef, useState, useMemo } from "react";

import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { sphereGeometry, meshStandardMaterial } from "three";

const Sphere = () => {
    const ref = useRef();
    useFrame((state) => {
        ref.current.rotation.set(ref.current.rotation.x + 0.1, ref.current.rotation.y + 0.1, ref.current.rotation.z + 0.1);
        ref.current.scale.set(
            Math.sin(state.clock.getElapsedTime() / 1.5) / 2,
            Math.cos(state.clock.getElapsedTime() / 1.5) / 2,
            Math.cos(state.clock.getElapsedTime() / 1.5) / 2
        );
    });
    return (
        <mesh ref={ref} visible userData={{ test: "here" }} position={[0, 0, 0]} castShadow>
            <sphereGeometry attach="geometry" args={[0.5, 32, 32]} />
            <meshStandardMaterial attach="material" color="blue" roughness={0.5} metalness={0.1} />
        </mesh>
    );
};

export default Sphere;

import React, { useRef, useState, useMemo } from "react";

import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

const Sphere = ({ currentX }) => {
    const ref = useRef();
    const vecX = new THREE.Vector3(currentX, 0, currentX * -1);

    useFrame((state) => {
        //ref.current.rotation.set(ref.current.rotation.x + 0.01, ref.current.rotation.y + 0.01, ref.current.rotation.z + 0.01);
        /*ref.current.position.set(
            coords[i], //Math.sin(state.clock.getElapsedTime() / coords[i]) / 2,
            coords[i], //Math.cos(state.clock.getElapsedTime() / coords[i]) / 10,
            coords[i] //Math.cos(state.clock.getElapsedTime() / coords[i]) / 2 + 0.05
        );*/
        ref.current.position.lerp(vecX, 0.1); /// This will watch for changes to the props in the vector and lerp accordingly
    });
    return (
        <>
            <mesh ref={ref} visible userData={{ test: "here" }} position={[0, 0, 0]} castShadow>
                <sphereGeometry attach="geometry" args={[0.5, 32, 32]} />
                <meshStandardMaterial attach="material" color="blue" roughness={0.5} metalness={1} />
            </mesh>
        </>
    );
};

export default Sphere;

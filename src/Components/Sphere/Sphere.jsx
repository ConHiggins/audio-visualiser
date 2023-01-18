import React, { useRef, useState, useMemo } from "react";

import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { sphereGeometry, meshStandardMaterial } from "three";

const Sphere = () => {
    return (
        <mesh visible userData={{ test: "here" }} position={[0, 0, 0]} castShadow>
            <sphereGeometry attach="geometry" args={[1, 16, 16]} />
            <meshStandardMaterial attach="material" color="white" transparent roughness={0.1} metalness={0.1} />
        </mesh>
    );
};

export default Sphere;

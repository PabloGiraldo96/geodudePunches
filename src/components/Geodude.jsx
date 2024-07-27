/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public/models/GeodudePokemon.glb 
*/

import React, { useLayoutEffect, useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function GeodudeModel(props) {
  const { nodes, materials } = useGLTF("./models/GeodudePokemon.glb");
  const ref = useRef();
  const tlRightPunch = useRef();
  const tlLeftPunch = useRef();
  const geodudeRightPunch = useRef();
  const rightBicep = useRef();
  const rightforeArm = useRef();

  const geodudeLeftPunch = useRef();
  const leftBicep = useRef();
  const leftforeArm = useRef();

  const animateRightPunch = () => {
    tlRightPunch.current.restart();
  };

  const animateLeftPunch = () => {
    tlLeftPunch.current.restart();
  };

  useLayoutEffect(() => {
    tlRightPunch.current = gsap.timeline({ paused: true });

    tlRightPunch.current.to(
      geodudeRightPunch.current.position,
      {
        duration: 1.3,
        x: 5.4,
        y: 1,
        ease: "elastic.out(1, 0.3)",
      },
      0.2
    );
    tlRightPunch.current.to(
      geodudeRightPunch.current.rotation,
      {
        duration: 1.8,
        x: -1,
        z: -1,
        y: Math.PI / -8, // Rotación inversa en el eje Y
        ease: "elastic.out(1, 2)",
      },
      0.2
    );
    tlRightPunch.current.to(
      rightBicep.current.position,
      {
        duration: 1.3,
        x: 0.8,
        ease: "elastic.out(1, 0.3)",
      },
      0.2
    );
    tlRightPunch.current.to(
      rightBicep.current.rotation,
      {
        duration: 1.8,
        x: Math.PI / 50,
        y: 1,
        ease: "elastic.out(1, 0.1)",
      },
      0.2
    );
    tlRightPunch.current.to(
      rightforeArm.current.position,
      {
        duration: 1.3,
        x: 3.4,
        z: 5.7,
        y: 1.5,
        ease: "elastic.out(1, 0.3)",
      },
      0.2
    );
    tlRightPunch.current.to(
      rightforeArm.current.rotation,
      {
        duration: 1.8,
        z: Math.PI / 2, // Rotación en el eje Z
        x: 7,
        ease: "elastic.out(1, 0.3)",
      },
      0.2
    );

    //Puño izquierdo

    tlLeftPunch.current = gsap.timeline({ paused: true });

    tlLeftPunch.current.to(
      geodudeLeftPunch.current.position,
      {
        duration: 1.6,
        x: 5.4,
        y: 3,
        z: -2.6,
        ease: "elastic.out(1, 0.3)",
      },
      0.5
    );
    tlLeftPunch.current.to(
      geodudeLeftPunch.current.rotation,
      {
        duration: 1,
        x: 0,
        z: 5,
        y: -Math.PI / 7, // Rotación inversa en el eje Y
        ease: "elastic.out(1, 6)",
      },
      0.5
    );
    tlLeftPunch.current.to(
      leftBicep.current.position,
      {
        duration: 1.6,
        x: 1.2,
        ease: "elastic.out(1, 0.3)",
      },
      0.5
    );
    tlLeftPunch.current.to(
      leftBicep.current.rotation,
      {
        duration: 1.6,
        x: Math.PI / 20,
        y: -1,
        ease: "elastic.out(1, 0.1)",
      },
      0.5
    );
    tlLeftPunch.current.to(
      leftforeArm.current.position,
      {
        duration: 1.6,
        x: 4,
        z: -4.2,
        y: 2.7,
        ease: "elastic.out(1, 0.3)",
      },
      0.5
    );
    tlLeftPunch.current.to(
      leftforeArm.current.rotation,
      {
        duration: 1.6,
        z: -Math.PI / 2, // Rotación inversa en el eje Z
        x: -5,
        y: 2,
        ease: "elastic.out(1, 0.3)",
      },
      0.5
    );

    //Devuelvo animacion del puno derecho

    tlRightPunch.current.to(
      geodudeRightPunch.current.position,
      {
        duration: 1.6,
        x: -1.5,
        z: 7,
        y: 1,
        ease: "elastic.out(1, 0.3)",
      },
      0.8
    );
    tlRightPunch.current.to(
      geodudeRightPunch.current.rotation,
      {
        duration: 1.6,
        x: -4,
        z: Math.PI / 7,
        y: -Math.PI / 2,
        ease: "elastic.out(1, 2)",
      },
      0.8
    );
    tlRightPunch.current.to(
      rightBicep.current.position,
      {
        duration: 1.6,
        x: -1,
        ease: "elastic.out(1, 0.3)",
      },
      0.8
    );
    tlRightPunch.current.to(
      rightBicep.current.rotation,
      {
        duration: 1.6,
        x: 0,
        y: 0,
        ease: "elastic.out(1, 0.1)",
      },
      0.8
    );
    tlRightPunch.current.to(
      rightforeArm.current.position,
      {
        duration: 1.6,
        x: -1.2,
        z: 6,
        y: 1.5,
        ease: "elastic.out(1, 0.3)",
      },
      0.8
    );
    tlRightPunch.current.to(
      rightforeArm.current.rotation,
      {
        duration: 1.6,
        z: 0,
        x: 0,
        ease: "elastic.out(1, 0.3)",
      },
      0.8
    );
  }, []);

  return (
    <group {...props} dispose={null} ref={ref} rotation={[0, -Math.PI / 6, 0]}>
      <group position={[-0.181, 2.192, 0.191]} scale={[-2.892, -1.718, -2.413]}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.eyesColor} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.pupila} />
        <mesh
          geometry={nodes.Cube_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube_5.geometry}
          material={materials.secondGray}
        />
        <mesh geometry={nodes.Cube_6.geometry} material={materials.thirdGray} />
      </group>
      <group
        position={[-1.907, 2.41, -3.478]}
        rotation={[0.06, 0.144, -1.546]}
        scale={[0.2, 0.333, 2.07]}
        ref={leftBicep}
      >
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials["thirdGray.001"]}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.greyFour}
        />
        <mesh
          geometry={nodes.Cube001_3.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <group
        position={[-1.495, 1.419, 3.893]}
        rotation={[0.307, -0.233, -0.543]}
        scale={[0.2, 0.333, 2.07]}
        ref={rightBicep}
      >
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          geometry={nodes.Cube002_3.geometry}
          material={materials["Material.017"]}
        />
      </group>
      <mesh
        geometry={nodes.leftForearm.geometry}
        material={materials["Material.008"]}
        position={[-1.577, 2.567, -5.105]}
        rotation={[0.178, -0.063, -1.283]}
        scale={[0.314, 0.524, 0.539]}
        ref={leftforeArm}
      />
      <mesh
        geometry={nodes.rightForearm.geometry}
        material={materials["Material.009"]}
        position={[-1.438, 1.664, 5.655]}
        rotation={[0.307, -0.233, -0.543]}
        scale={[0.314, 0.524, 0.539]}
        ref={rightforeArm}
      />
      <group
        position={[-0.1, 3.024, -4.934]}
        rotation={[0.178, -0.063, -1.283]}
        scale={[0.807, 0.994, 0.815]}
        ref={geodudeLeftPunch}
      >
        {/*Puño derecho*/}
        <mesh
          geometry={nodes.Cube005.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Cube005_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Cube005_2.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <group
        position={[-0.733, 2.787, 6.227]}
        rotation={[0.307, -0.233, -0.543]}
        scale={[0.72, 0.887, 0.728]}
        ref={geodudeRightPunch}
      >
        {/*Puño izquierdo*/}

        <mesh
          geometry={nodes.Cube006.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube006_1.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group
        position={[5.575, 10.187, -16.632]}
        rotation={[0.233, -0.144, -0.363]}
        scale={1.374}
      >
        <mesh
          geometry={nodes.Cube007.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          geometry={nodes.Cube007_1.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          geometry={nodes.Cube007_2.geometry}
          material={materials["Material.020"]}
        />
      </group>
      <group
        position={[-0.315, 0.833, -9.154]}
        rotation={[-0.049, -0.029, -0.033]}
        scale={[0.438, 0.406, 0.927]}
      >
        <mesh
          geometry={nodes.Cube008.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          geometry={nodes.Cube008_1.geometry}
          material={materials["Material.023"]}
        />
      </group>
      <Html position={[0, 0, 0]}>
        <button onClick={animateRightPunch} className="buttonRight">
          Right Punch
        </button>
        <button onClick={animateLeftPunch} className="buttonLeft">
          Left Punch
        </button>
      </Html>
    </group>
  );
}

useGLTF.preload("./models/GeodudePokemon.glb");

/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { GeodudeModel } from "./Geodude";
import { GeodudeScene } from "./GeodudeScene";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={4} />
      <GeodudeScene />
      <GeodudeModel />
    </>
  );
};

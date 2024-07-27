/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { GeodudeModel } from "./Geodude";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={true} />
      <ambientLight intensity={4} />
      <GeodudeModel />
    </>
  );
};

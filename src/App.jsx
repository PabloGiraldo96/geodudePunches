import { Canvas } from "@react-three/fiber";
import "./App.css";
import { ScrollControls } from "@react-three/drei";
import { Experience } from "./components/Eperience";

function App() {
  return (
    <Canvas
      camera={{
        fov: 90,
        position: [20, 5, 10],
      }}
    >
      <ScrollControls />
      <Experience />
    </Canvas>
  );
}

export default App;

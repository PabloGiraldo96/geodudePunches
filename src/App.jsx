import { Canvas } from "@react-three/fiber";
import "./App.css";
import { ScrollControls } from "@react-three/drei";
import { Experience } from "./components/Eperience";

function App() {
  return (
    <Canvas
      camera={{
        fov: 40,
        position: [40, 10, 30],
      }}
    >
      <ScrollControls />
      <Experience />
    </Canvas>
  );
}

export default App;

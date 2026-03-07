// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { useMediaQuery } from "react-responsive";
// import  {Room}  from "./Room";
// import Particles from "./Particles";
// import HeroLights from "./HeroLights";

// const HeroExperience = () => {
//     const isTablet = useMediaQuery({query: '(max-width:1024px)'});
//     const isMobile = useMediaQuery({query: '(max-width:768px)'});

//     return (
//     <Canvas camera={{position:[0, 0, 15], fov:45}}>
//         <HeroLights />
//         <Particles count={200} />
//         <OrbitControls
//             enablePan={false}
//             enableZoom={!isTablet}
//             maxDistance={20}
//             minDistance={5}
//             minPolarAngle={Math.PI / 5}
//             maxPolarAngle={Math.PI / 2}
//         />

//         <group
//             scale={isMobile? 0.7 : 1}
//             position={[0, -3.5, 0]}
//             rotation={[0, -Math.PI / 4, 0]}
//             >
//                 <Room />
//         </group>

//     </Canvas>
//   )
// }

// export default HeroExperience
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense, useState } from "react";
import { Room } from "./Room";
import Particles from "./Particles";
import HeroLights from "./HeroLights";

// Fallback shown while 3D loads
const CanvasLoader = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "transparent",
    }}
  >
    <div
      style={{
        width: 40,
        height: 40,
        border: "3px solid rgba(255,255,255,0.1)",
        borderTop: "3px solid rgba(255,255,255,0.6)",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // Graceful fallback if WebGL fails on the device
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      />
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      // Key mobile/deployment fixes:
      gl={{
        antialias: !isMobile, // Disable antialiasing on mobile for perf
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false, // Don't fail on low-end GPUs
        preserveDrawingBuffer: false,
      }}
      dpr={isMobile ? [1, 1.5] : [1, 2]} // Limit pixel ratio on mobile
      onCreated={({ gl }) => {
        // Catch WebGL context loss (common on mobile)
        gl.domElement.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          setHasError(true);
        });
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <HeroLights />
        <Particles count={isMobile ? 100 : 200} />{" "}
        {/* Fewer particles on mobile */}
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;

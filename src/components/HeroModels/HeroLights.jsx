import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      <>
        {/* Main desk lamp (warm & focused) */}
        <spotLight
          position={[1.5, 4.5, 3]}
          angle={0.25}
          penumbra={0.6}
          intensity={90}
          color="#ffd6e0" // soft pink
          castShadow
        />

        {/* Overhead ambient light (cool tech vibe) */}
        <spotLight
          position={[0, 6, 0]}
          angle={0.6}
          penumbra={1}
          intensity={35}
          color="#72ddf7" // cyan
        />

        {/* Purple side fill (aesthetic mood) */}
        <spotLight
          position={[-4, 4, 3]}
          angle={0.4}
          penumbra={1}
          intensity={55}
          color="#c77dff"
        />

        {/* Rect area light – screen glow */}
        <primitive
          object={new THREE.RectAreaLight("#ffafcc", 6, 2.5, 1.5)}
          position={[0, 2.2, 2.5]}
          rotation={[0, Math.PI, 0]}
          intensity={18}
        />

        {/* Back light – depth & silhouette */}
        <pointLight position={[0, 2, -4]} intensity={12} color="#5a189a" />

        {/* Decorative LED / RGB strip vibe */}
        <pointLight position={[2, 1, -1]} intensity={8} color="#3a86ff" />

        <pointLight position={[-2, 1, -1]} intensity={6} color="#ff4d6d" />
      </>
    </>
  );
};

export default HeroLights;

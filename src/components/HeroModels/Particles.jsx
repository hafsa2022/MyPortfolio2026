// import { useRef } from "react";
// import { useState } from "react";
// import { useFrame } from "@react-three/fiber";

// const Particles = ({ count = 200 }) => {
//   const mesh = useRef();

//   // const particles = useMemo(() => {
//   //   const temp = [];
//   //   for (let i = 0; i < count; i++) {
//   //     temp.push({
//   //       position: [
//   //         (Math.random() - 0.5) * 10,
//   //         Math.random() * 10 + 5, // higher starting point
//   //         (Math.random() - 0.5) * 10,
//   //       ],
//   //       speed: 0.005 + Math.random() * 0.001,
//   //     });
//   //   }
//   //   return temp;
//   // }, [count]);
  

//     const [particles] = useState(() =>
//       Array.from({ length: count }, () => ({
//         position: [
//           (Math.random() - 0.5) * 10,
//           Math.random() * 10 + 5,
//           (Math.random() - 0.5) * 10,
//         ],
//         speed: 0.005 + Math.random() * 0.001,
//       }))
//     );


//   useFrame(() => {
//     const positions = mesh.current.geometry.attributes.position.array;
//     for (let i = 0; i < count; i++) {
//       let y = positions[i * 3 + 1];
//       y -= particles[i].speed;
//       if (y < -2) y = Math.random() * 10 + 5;
//       positions[i * 3 + 1] = y;
//     }
//     mesh.current.geometry.attributes.position.needsUpdate = true;
//   });

//   const positions = new Float32Array(count * 3);
//   particles.forEach((p, i) => {
//     positions[i * 3] = p.position[0];
//     positions[i * 3 + 1] = p.position[1];
//     positions[i * 3 + 2] = p.position[2];
//   });

//   return (
//     <points ref={mesh}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={count}
//           array={positions}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         color="#ffffff"
//         size={0.05}
//         transparent
//         opacity={0.9}
//         depthWrite={false}
//       />
//     </points>
//   );
// };

// export default Particles;
import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 200 }) => {
  const mesh = useRef();

  const particles = useState(() =>
    Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 10,
        Math.random() * 10 + 5,
        (Math.random() - 0.5) * 10,
      ],
      speed: 0.005 + Math.random() * 0.001,
    }))
  )[0];

  // ✅ FIX: Move Float32Array into useMemo so it's only created ONCE
  // Previously it was outside hooks = recreated on every single render = memory crash on mobile
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      arr[i * 3] = p.position[0];
      arr[i * 3 + 1] = p.position[1];
      arr[i * 3 + 2] = p.position[2];
    });
    return arr;
  }, [count, particles]);

  useFrame(() => {
    if (!mesh.current) return;
    const pos = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      let y = pos[i * 3 + 1];
      y -= particles[i].speed;
      if (y < -2) y = Math.random() * 10 + 5;
      pos[i * 3 + 1] = y;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
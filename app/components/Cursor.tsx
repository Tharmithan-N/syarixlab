// "use client";

// import { useEffect, useState, useRef } from "react";

// type Ripple = {
//   x: number;
//   y: number;
//   size: number;
//   opacity: number;
// };

// export default function Cursor() {
//   const [ripples, setRipples] = useState<Ripple[]>([]);
//   const requestRef = useRef<number | null>(null);

//   // Track mouse movement and create ripples
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setRipples((prev) => [
//         ...prev,
//         { x: e.clientX, y: e.clientY, size: 0, opacity: 1 },
//       ]);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Animate ripples smoothly using requestAnimationFrame
//   const animate = () => {
//     setRipples((prev) =>
//       prev
//         .map((r) => ({
//           ...r,
//           size: r.size + 2.5, // slower growth for smoothness
//           opacity: r.opacity - 0.015, // slower fade
//         }))
//         .filter((r) => r.opacity > 0)
//     );

//     requestRef.current = requestAnimationFrame(animate);
//   };

//   useEffect(() => {
//     requestRef.current = requestAnimationFrame(animate);
//     return () => {
//       if (requestRef.current) cancelAnimationFrame(requestRef.current);
//     };
//   }, []);

//   return (
//     <>
//       {/* Ripples only */}
//       {ripples.map((r, i) => (
//         <div
//           key={i}
//           className="fixed pointer-events-none rounded-full border border-blue-500 z-[9999]"
//           style={{
//             left: r.x,
//             top: r.y,
//             width: `${r.size}px`,
//             height: `${r.size}px`,
//             opacity: r.opacity,
//             transform: "translate(-50%, -50%)",
//           }}
//         />
//       ))}
//     </>
//   );
// }



"use client";

import { useEffect, useState, useRef } from "react";

type Ripple = {
  x: number;
  y: number;
  size: number;
  opacity: number;
};

export default function Cursor() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const requestRef = useRef<number | null>(null);

  // Track mouse movement and create ripples
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setRipples((prev) => [
        ...prev,
        { x: e.clientX, y: e.clientY, size: 0, opacity: 1 },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate ripples smoothly
  const animate = () => {
    setRipples((prev) =>
      prev
        .map((r) => ({
          ...r,
          size: r.size + 2.5,
          opacity: r.opacity - 0.015,
        }))
        .filter((r) => r.opacity > 0)
    );

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {ripples.map((r, i) => (
        <div
          key={i}
          className="fixed pointer-events-none rounded-full z-[9999] border border-blue-300"
          style={{
            left: r.x,
            top: r.y,
            width: `${r.size}px`,
            height: `${r.size}px`,
            opacity: r.opacity,
            transform: "translate(-50%, -50%)",
            backgroundImage: `radial-gradient(circle at 10% 10%, rgba(173,216,230,0.2), rgba(0,123,255,0.1))`,
          }}
        />
      ))}
    </>
  );
}

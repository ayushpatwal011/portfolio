"use client"
import React, { useEffect, useRef } from 'react';

const DynamicCursor: React.FC = () => {
  const cursorRefs = useRef<HTMLDivElement[]>([]);
  const trailCount = 5; // Number of circles in the trail
  const positions = useRef<{ x: number; y: number }[]>([]); // Positions of the circles
  const target = useRef<{ x: number; y: number }>({ x: 0, y: 0 }); // Current mouse position

  useEffect(() => {
    // Initialize positions for each circle
    positions.current = Array.from({ length: trailCount }, () => ({ x: 0, y: 0 }));

    // Update the mouse position on mousemove
    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Update positions of circles with smooth trailing
      for (let i = 0; i < positions.current.length; i++) {
        const currentPos = positions.current[i];
        const targetPos = i === 0 ? target.current : positions.current[i - 1];

        // Smoothly interpolate positions
        currentPos.x += (targetPos.x - currentPos.x) * 0.2; // Adjust this factor for smoothness
        currentPos.y += (targetPos.y - currentPos.y) * 0.2;

        // Update circle position in the DOM
        if (cursorRefs.current[i]) {
          cursorRefs.current[i].style.transform = `translate(${currentPos.x}px, ${currentPos.y}px)`;
        }
      }

      // Continue the animation loop
      requestAnimationFrame(animate);
    };

    // Start the animation loop
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {[...Array(trailCount)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (cursorRefs.current[index] = el!)}
          style={{
            position: 'fixed',
            width: `${40 - index * 10}px`, // Incremental size for circles
            height: `${40 - index * 10}px`,
            backgroundColor: `rgba(0, 255, 0, ${1 - index * 0.2})`, // Reduce opacity for trailing circles
            borderRadius: '50%',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
          }}
        ></div>
      ))}
    </>
  );
};

export default DynamicCursor;

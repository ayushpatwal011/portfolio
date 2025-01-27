"use client"
import React, { useEffect, useState } from 'react';

const DynamicCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12px',
        fontWeight: 'normal',
        position: 'fixed',
        top: position.y - 8,
        left: position.x -5,
        width: '150px',
        height: '30px',
        background: "black",
        // 'radial-gradient(circle, white, red)',
        borderRadius: '5px',
        pointerEvents: 'none',
        zIndex: 1000,
        transform: `translate(-50%, -50%)`,
        transition: 'transform 0.2s ease-out',
        color:'white'
      }}
    >Projects comming soon</div>
  );
};

export default DynamicCursor;

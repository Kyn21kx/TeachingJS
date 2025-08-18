
import React, { useState, useEffect } from 'react';

export default function Spotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    });
  });

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, #fff, #000)`
      }}
    />
  );
}

import React, { useEffect, useState } from 'react'

const MouseSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePositionHandler = (event) => {
      setMousePosition({x: event.clientX, y: event.clientY});
    };
    
    window.addEventListener('mousemove', updatePositionHandler);
    return () => window.removeEventListener('mousemove', updatePositionHandler);
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #fff, #000)`
      }}
    />
  );

}

export default MouseSpotlight;

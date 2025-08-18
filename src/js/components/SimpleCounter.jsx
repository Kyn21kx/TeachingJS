import React, { useEffect, useState } from "react"

// Naiive, Default, Optimized

const SimpleCounter = () => {
  // Inicia el seconds en 0
  const [seconds, setSeconds] = useState(0);
  // Necesitamos una manera de aumentar el contador
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearInterval(timer);
  });
}

export default SimpleCounter;

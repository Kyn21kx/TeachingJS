import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [seconds, setSeconds] = useState([]);
  seconds.push(3, 1); // Se le va a intentar agregar a seconds

  let tempSeconds = seconds;
  tempSeconds.push(3, 4, 5, 9);
  // Destructuring operator
  setSeconds([...seconds, 3, 4, 5, 9]);

  const onButtonClicked = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <p className="paragraph">Count: {counter}</p>
      <button className="btn-primary" onClick={onButtonClicked}>Increase count!</button>
    </>
  );
}

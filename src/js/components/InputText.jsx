import { useState } from "react";

export default function Foo() {  
}

const InputText = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.verifyFunction(e.target.value)}/>
    </div>
  );
};


// export default InputText;

import { useState } from "react";
import InputText from "./InputText";


const Login = () => {
  // Key-Value Pairs (Llave-Valor Pares)
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  
  const updateEmail = (mail) => {
    setUserData({...userData, email: mail});
  };
  
  const updatePassword = (pass) => {
    setUserData({...userData, password: pass});
  };

  const verifyUserData = () => {
    let localMessage = "";
    if (!userData.email.includes("@")) {
      localMessage += "Por favor ingresa un email valido!";
    }
    if (userData.password.length < 8) {
      localMessage += "Tu contraseña es muy corta!";
    }
    setErrorMessage(localMessage);
  };
  
  return (
    <>
      <InputText verifyFunction={updateEmail}/>
      <InputText verifyFunction={updatePassword}/>
      <button onClick={verifyUserData}>Send</button>
      <p>{errorMessage}</p>
    </>
  );
};


export default Login;


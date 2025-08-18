import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getCoffeeData } from "../services/coffee.service";
import { addUser } from "../services/users.service";

const CoffeeList = () => {
  const [productList, setProductList] = useState([]);
  const updateData = async () => {
    // Llamar a mi API con mi servicio de Café
    const data = await getCoffeeData();
    // Me va a traer un array con elementos de café
    setProductList(data);
  };
  
  useEffect(() => {
    // Básicamente un window.onload
    addUser("Dayloc");
  });
  return (
    <div>
      <ul>
        {
          productList.map(element => {
            return <li>{element.title}</li>
          })
          
        }
      </ul>
    </div>
  );
}


export default CoffeeList;

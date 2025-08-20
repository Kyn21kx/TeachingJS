import { BASE_URL } from "../utils/constants";

export const addUser = async (userName) => {
  try {
    // POST
    const responseData = await fetch(`${BASE_URL}/users/${userName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await responseData.json();
    if (!responseData.ok) { // Early return
      console.error(json);
      throw new Error(json);
    }
    return json;
  }
  catch(err) {
    console.error(`Hubo un error al agregar el usuario ${userName}, el servidor dijo: ${JSON.stringify(err)}`);
  }
}


export const getAllUsers = async () => {
  try {
    // GET
    const responseData = await fetch(`${BASE_URL}/users?offset=0&limit=1000`);
    if (!responseData.ok) { // Early return
      throw new Error(responseData.status);
    }
    const json = await responseData.json();
    return json;
  }
  catch(err) {
    console.error(`Oye, algo salio mal: ${err}`);
  }
}


import { BASE_URL } from "../utils/constants";

export const addTask = async (userName, taskTitle) => {
  try {
    // Fetch default method: GET
    const taskToAdd = {
      label: taskTitle,
      is_done: false
    };
    
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Mime types
      },
      body: JSON.stringify(taskToAdd)
    };
    
    const responseData = await fetch(`${BASE_URL}/todos/${userName}`, requestOptions);
    const json = await responseData.json();
    if (!responseData.ok) {
      console.error(responseData.status);
      throw new Error(json);
    }
    return json;
  }
  catch(err) {
    console.error(`Hubo un error al agregar la tarea ${taskTitle} al usuario ${userName}, el servidor dijo: ${err}`);
  }
}


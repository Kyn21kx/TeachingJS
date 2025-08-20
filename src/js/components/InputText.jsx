import { addTask } from "../services/todos.service";

const USER = "Yumar";

const InputText = () => {
  
  const sendTaskToAdd = async (event) => {
      
    if (event.key !== "Enter") {
      return;
    }
    const titleText = event.target.value;
    await addTask(USER, titleText);
    alert(`Se ha agregado la tarea ${titleText} al usuario ${USER}`);
  }
  
  
  return (
    <div>
      <input type="text" onKeyDown={sendTaskToAdd}/>
    </div>
  );
};


export default InputText;

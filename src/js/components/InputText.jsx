import { useContext } from "react";
import { addTask } from "../services/todos.service";
import { StoreContext, TodoActions } from "../utils/store";

const USER = "Yumar";

const InputText = () => {
  const {store, dispatch} = useContext(StoreContext);
    
  const sendTaskToAdd = (event) => {
    if (event.key !== "Enter") {
      return;
    }
    const titleText = event.target.value;

    dispatch({
      type: TodoActions.Add,
      payload: titleText
    });

    alert(`Se ha agregado la tarea ${titleText} al usuario ${USER}`);
  }
  
  return (
    <div>
      <input type="text" onKeyDown={sendTaskToAdd}/>
    </div>
  );
};


export default InputText;

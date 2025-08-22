import { useReducer } from "react";

export const TodoActions = {
  Add: 0,
  Delete: 1,
  Update: 2
};

export const StoreContext = createContext();

export default function storeReducer(state, action) {  
  switch(action.type) {
    case TodoActions.Add:
      return {... state, todos: [... state.todos, action.payload] };
    case TodoActions.Delete:
      return {... state, todos: [... state.todos.remove(action.payload)] };
    case TodoActions.Update:
      return
      
  }
}

export function StoreProvider({ children }) {
    const initialValue = {
      todos: ["Make the bed", "Take out the trash"]
    };
    // Me pide una función para cambiar el valor de mi estado global y un valor inicial
    const [store, dispatch] = useReducer(storeReducer, initialValue);
    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}


import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "task description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "task description",
    completed: false,
  },
];
//se asigna a initial state initialState:initialState == initialState
//state es el valor almacenado de la variable en este caso el arreglo initial state
//payload contiene el objeto que se envia desde algun componente
export const TaskSlice = createSlice({
  name: "TaskSlice",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      console.log(action.payload);
      //buscar si existe en arreglo
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        //splice remueve un elemnto recibe un index y el no de elemetos a eliminar apartir de esa posicion
        state.splice(state.indexOf(task), 1);
      }
    },
    editTask:(state,action)=>{
      const {id,title,description} = action.payload
      const taskFound = state.find(task=>task.id===id)
      if(taskFound){
        taskFound.title =  title
        taskFound.description = description
      }
    }
  },
});
export const { addTask, deleteTask,editTask } = TaskSlice.actions;
export default TaskSlice.reducer;

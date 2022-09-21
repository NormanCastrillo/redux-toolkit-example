import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask,editTask } from "../features/tasks/TaskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setTask(taskFound);
      }
    }
  }, [params.id,tasks]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  //en primer instancia se pasa el objeto task pero no se ha generado el id
  //entonces recurrimos al paquete uuid que nos permite generar un id unico
  //ahora en dispatch le pasamos un nuevo objeto que copia el contenido
  //del objeto task y le añade una clave id con el valor que se general de
  //la ejecucion de la libreria
  const handleSubmit = (e) => {
    if (params.id) {
        dispatch(editTask(task))
    } else {
      e.preventDefault();
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-md drop-shadow-2xl flex flex-col">
      <label htmlFor="title" className="mb-2">Title:</label>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
        className="rounded-md bg-slate-200 mb-4 p-2"
      />
      <label htmlFor="title" className="mb-2">Description:</label>
      <textarea
        name="description"
        placeholder="task description"
        onChange={handleChange}
        value={task.description}
        className="rounded-md bg-slate-200 mb-4 p-2"
      ></textarea>
      <button className="bg-green-700 py-2 px-2 rounded-md drop-shadow-2xl text-white">guardar</button>
    </form>
  );
}

export default TaskForm;

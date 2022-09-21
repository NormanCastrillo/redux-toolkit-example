import React from "react";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/TaskSlice";

function TaskList() {
  const dispatch = useDispatch();
  const TaskState = useSelector((state) => state.tasks);
  const hadleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-5/6 ">
      <header className="mb-6">
        <h1 className="font-bold font text-2xl mb-4">Task {TaskState.length}</h1>
        <Link to="/create-task" className="bg-green-700 py-2 px-2 rounded-md drop-shadow-2xl text-white"> Create Task</Link>
      </header>
      <div className="grid grid-cols-3 gap-8">
        {TaskState.map((task) => (
          <div
            key={task.id}
            className="bg-white text-black flex justify-center items-center p-4 flex-col rounded-lg drop-shadow-md mb-4"
          >
            <span className="mb-2">{task.title}</span>
            <span className="mb-4">{task.description}</span>
            <div className="w-full flex justify-center gap-3">
              <Link to={`/edit-task/${task.id}`} className="rounded-md p-2 bg-blue-400 text-white drop-shadow-2xl">Editar</Link>
              <button onClick={() => hadleDelete(task.id)} className="rounded-md p-2 bg-red-600 text-white drop-shadow-2xl">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;

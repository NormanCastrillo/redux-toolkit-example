import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="bg-white h-screen text-black">
      <div className="flex justify-center items-center h-full">
        <BrowserRouter basename="/redux-toolkit-example" >
          <Routes>
            <Route path="/redux-toolkit-example" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

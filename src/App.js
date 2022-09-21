import "./App.css";

import { BrowserRouter, HashRouter, Route } from "react-router-dom";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="bg-white h-screen text-black">
      <div className="flex justify-center items-center h-full">
        <BrowserRouter>
          <HashRouter>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </HashRouter>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

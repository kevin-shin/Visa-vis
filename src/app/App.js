import React, {useEffect, useState} from 'react';
import './App.css';
import {getTasks} from "../common/api";
import Timeline from "./timeline/Timeline";
import TasksList from "./tasksList/TasksList";
import TaskCard from "./taskCard/TaskCard";

const App = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks().data);
  }, []);

  return (
    <div className="body">
      <div className="header">
        Visa-vis
      </div>
      <div className="main">
        <TaskCard selectedTask={selectedTask} onChange={setSelectedTask}/>
        <TasksList selectedTask={selectedTask} tasks={tasks} onSelectTask={setSelectedTask} />
        <Timeline selectedTask={selectedTask} tasks={tasks} />
      </div>
    </div>
  );
};

export default App;

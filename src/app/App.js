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
        <Timeline tasks={tasks} task={selectedTask}/>
        <TasksList tasks={tasks} onSelectTask={setSelectedTask}/>
        <TaskCard task={selectedTask} onChange={setSelectedTask}/>
      </div>
    </div>
  );
};

export default App;

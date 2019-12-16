import React, {useEffect, useState} from 'react';
import './App.css';
import {getTasks} from "../common/api";
import Timeline from "./timeline/Timeline";
import TasksList from "./tasksList/TasksList";
import TaskCard from "./taskCard/TaskCard";
import {END_DATE} from "../common/mock";
import moment from "moment";


const App = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const endDate = moment(END_DATE);

  useEffect(() => {
    setTasks(getTasks().data);

    const focused = document.querySelector('.selected');

    if (focused) {
      focused.scrollIntoView({behavior: 'smooth'});
    }
  }, [selectedTask]);

  return (
    <div className="body">
      <div className="header">
        Visa-vis
      </div>
      <div className="main">
        <TaskCard selectedTask={selectedTask} onChange={setSelectedTask}/>
        <TasksList selectedTask={selectedTask} tasks={tasks} onSelectTask={setSelectedTask} />
        <Timeline selectedTask={selectedTask} tasks={tasks} onSelectTask={setSelectedTask} />
        <div className="timeline-label">
          <div className="timeline-dates">
            TODAY
          </div>
          <div className="timeline-dates">
            {endDate.format('LL')}
          </div>
      </div>
      </div>
    </div>
  );
};

export default App;

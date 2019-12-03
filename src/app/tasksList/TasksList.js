import React from "react";
import TaskListItem from "./TaskListItem";
import "./styles.css";

const TasksList = (props) => {
  return (
    <div className="TasksList">
      <ul className="tasks-list">
        {
          props.tasks
          .sort( (date1,date2) => {
            let first_date = new Date(date1.date);
            let second_date = new Date(date2.date);
  
            if (first_date < second_date) return -1;
            if (first_date > second_date) return 1;
            return 0;
            
          })
          .map( (task) => {
            return (
              <TaskListItem
                key={task.id}
                task={task}
                onSelect={props.onSelectTask}
                onChange={props.onSelectTask}
              />
            );
          })
        }
      </ul>
    </div>
  );
};

export default TasksList;
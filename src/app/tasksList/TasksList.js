import React from "react";
import TaskListItem from "./TaskListItem";
import "./styles.css";

const TasksList = (props) => {
  return (
    <div className="TasksList">
      <div className="task-list-header"/>
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
                className={`${task === props.selectedTask ? "selected" : ""}`}
              />
            );
          })
        }
      </ul>
      <div className="task-list-footer"/>
    </div>
  );
};

export default TasksList;
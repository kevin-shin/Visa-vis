import React from "react";
import TaskListItem from "./TaskListItem";
import "./styles.css";

const TasksList = (props) => {
  return (
    <div>
      <ul>
        {
          props.tasks.map(task => {
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
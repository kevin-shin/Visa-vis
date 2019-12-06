import { updateTask } from "../../common/api";
import React from "react";

const TaskListItem = (props) => {
  const task = props.task;

  return (
    <li
      className="TaskListItem"
      onClick={() => props.onSelect(task)}
    >
      <div className="task-item">
        <div>
          <input
            type="date"
            value={task.date}
            onChange={(e) => {
              e.persist();

              let newTask = {
                ...task,
                date: e.target.value
              };

              updateTask(task.id, newTask);
              props.onChange(newTask);
            }}
          />
          <span className="task-li-title">
            {props.task.title}
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            checked={task.checked}
            onChange={(e) => {
              e.persist();

              let newTask = {
                ...task,
                checked: e.target.checked
              };

              updateTask(task.id, newTask);
              props.onChange(newTask);
            }}
          />
        </div>
      </div>
    </li>
  )
};

export default TaskListItem;
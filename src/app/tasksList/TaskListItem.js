import {updateTask} from "../../common/api";
import React from "react";

const TaskListItem = (props) => {
  const task = props.task;

  return (
    <li
      className="TaskListItem"
      onClick={() => props.onSelect(task)}
    >
      <input
        type="date"
        value={task.date}
        onChange={() => {

        }}
      />
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
      <span className="task-li-title">
        {props.task.title}
      </span>
    </li>
  )
};

export default TaskListItem;
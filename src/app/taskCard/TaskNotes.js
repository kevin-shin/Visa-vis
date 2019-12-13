import {updateTask} from "../../common/api";
import React from "react";

const TaskNotes = (props) => {
  const task = props.task;

  return (
    <div className="TaskNotes">
      <p className="task-notes-title">Notes:</p>
      <textarea
        className="task-notes"
        value={task.notes}
        onChange={(e) => {
          e.persist();

          let newTask = {
            ...task,
            notes: e.target.value
          };

          updateTask(task.id, newTask);
          props.onChange(newTask);
        }}/>
    </div>
  );
};

export default TaskNotes;
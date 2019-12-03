import {updateTask} from "../../common/api";
import React from "react";

const SubTasksList = (props) => {
  const task = props.task;

  return (
    <div className="SubTasksList">
      <span className="subtask-list-title">Additional Tasks:</span>
      <ul>
        {
          task.subTasks.map((subTask, i) => {
            return (
              <li key={subTask.id}>
                <input
                  type="checkbox"
                  checked={subTask.checked}
                  onChange={(e) => {
                    e.persist();

                    let newSubTask = {
                      ...subTask,
                      checked: e.target.checked
                    };

                    let newTask = {...task};

                    newTask.subTasks[i] = newSubTask;

                    updateTask(task.id, newTask);
                    props.onChange(newTask);
                  }}/>
                {subTask.title}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default SubTasksList;
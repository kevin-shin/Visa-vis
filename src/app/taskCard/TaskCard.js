import {updateTask} from "../../common/api";
import React from "react";
import "./styles.css";

const TaskCard = (props) =>{
  const task = props.task;

  return (
    <div className="TaskCard">
      {
        task ?
          <>
            <div>{task.title}</div>
            <div>{task.description}</div>
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
            {
              task.actionItems.map(actionItem => {
                return (
                  <a key={actionItem.id} href={actionItem.link} target="_blank" rel="noopener noreferrer">
                    {actionItem.title}
                  </a>
                )
              })
            }
            <br/>
            <textarea
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
          </>
          :
          "Select a task on the left"
      }
    </div>
  );
};

export default TaskCard;
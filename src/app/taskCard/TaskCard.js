import React from "react";
import "./styles.css";
import SubTasksList from "./SubTaskList";
import TaskNotes from "./TaskNotes";

const TaskCard = (props) =>{
  const task = props.task;

  return (
    <div className="TaskCard">
      {
        task ?
          <>
            <div className="task-title">{task.title}</div>
            <div className="task-description">{task.description}</div>
            <SubTasksList task={task} onChange={props.onChange}/>
            <div className="buttonHolder">{
                task.actionItems.map(actionItem => {
                  return (
                    <a
                      key={actionItem.id}
                      className="button-ghost action-item"
                      href={actionItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {actionItem.title}
                    </a>
                  )
                })
              }
            </div>
            <TaskNotes task={task} onChange={props.onChange}/>
          </>
          :
          <div className="no-card-instruction">
            Select a task on the left to see details here
          </div>
      }
    </div>
  );
};

export default TaskCard;
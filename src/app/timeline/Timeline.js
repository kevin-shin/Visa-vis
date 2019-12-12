import React from "react";
import "./styles.css";

const Timeline = (props) => {
  return (
    <div className="Timeline">
      <div className="time-line">
        {
          props.tasks.map(task => {
              return (
                <span key={task.id} className={`task-circle ${task === props.selectedTask ? "selected" : ""}`}/>
              );
            }
          )
        }
      </div>
    </div>
  )
};

export default Timeline;
import React from "react";
import "./styles.css";
import moment from "moment";
import {END_DATE} from "../../common/mock";

const Timeline = (props) => {
  const now = moment();
  const endDate = moment(END_DATE);

  return (
    <div className="Timeline">
      <span className="start-date-label task-circle">Today</span>
      <div className="time-line">
        {
          props.tasks.map(task => {
              let percent = (moment(task.date).diff(now) / endDate.diff(now)) * 100;

              return (
                <div
                  key={task.id}
                  className={`task-circle ${task === props.selectedTask ? "selected" : ""}`}
                  onClick={() => {
                    props.onSelectTask(task);
                  }}
                  style={{top: `${percent}%`}}
                />
              );
            }
          )
        }
      </div>
      <span className="end-date-label task-circle">{endDate.format('LL')}</span>
    </div>
  )
};

export default Timeline;
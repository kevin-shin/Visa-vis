import { updateTask } from "../../common/api";
import React from "react";
import moment from "moment";
import {END_DATE} from "../../common/mock";
import { ThemeProvider } from "styled-components";
import { CalendarIcon } from "react-calendar-icon";

const TaskListItem = (props) => {
  const task = props.task;
  const endDate = moment(END_DATE);
  var iconDate = new Date(task.date);
  iconDate.setDate(iconDate.getDate() + 1);
  const theme = {
    calendarIcon: {
      textColor: "white",
      primaryColor: "#25274D",
      backgroundColor: "#fafafa"
    }
  };

  const dateOptions = {
    header: { month: "long" },
    value: { day: "2-digit" },
  };

  return (
    <li
      className={`TaskListItem ${props.className} ${task.checked ? "complete" : ""}`}
      onClick={(e) => {
        e.persist();

        if (!e.target.classList.contains("task-li-btn")) {
          props.onSelect(task)
        }
      }}
    >
      <div className="task-item">
        <div className="task-li-content">
          <label className="task-label" htmlFor={`date-input${task.id}`}>
            <ThemeProvider theme={theme}>
              <CalendarIcon date={iconDate} options={dateOptions}/>
            </ThemeProvider>
            <input
              className="date-input"
              id={`date-input${task.id}`}
              type="date"
              min={moment().format("YYYY-MM-DD")}
              max={endDate.format("YYYY-MM-DD")}
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
          </label>
          <span className="task-li-title">
            {props.task.title}
          </span>
        </div>
        <button
          className={`task-li-btn ${task.checked ? "checked" : ""}`}
          onClick={() => {
            let newTask = {
              ...task,
              checked: !task.checked
            };

            updateTask(task.id, newTask);
            props.onChange(newTask);
          }}
        />
      </div>
    </li>
  )
};

export default TaskListItem;
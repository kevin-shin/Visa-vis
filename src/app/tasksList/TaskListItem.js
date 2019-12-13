import { updateTask } from "../../common/api";
import React from "react";
import moment from "moment";
import { CalendarIcon } from "react-calendar-icon";
import { END_DATE } from "../../common/mock";
import DatePicker from "react-datepicker";
import { ThemeProvider } from "styled-components";
import 'react-datepicker/dist/react-datepicker.css';

const theme = {
  calendarIcon: {
    textColor: "white", 
    primaryColor: "#25274D", 
    backgroundColor: "#fafafa"
  }
};

const dateOptions = {
  header: { month: "long" },
  value: { day: "2-digit" }
};

const TaskListItem = (props) => {
  const task = props.task;
  const endDate = moment(END_DATE);
  let [date, setStartDate] = React.useState(new Date(task.date));

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
          <label>
            <ThemeProvider theme={theme}>
              <CalendarIcon date={date} options={dateOptions}/>
            </ThemeProvider>
            <DatePicker
              className="date-input"
              id={"datePicker" + task.id}
              selected={date}
              onChange={(date) => {
                setStartDate(date);
                let newTask = {
                  ...task,
                  date: date
                }
                updateTask(task.id, newTask);
                props.onChange(newTask);
              }}

            />
          </label>
          <span className="task-li-title">{props.task.title}</span>
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
import React from "react";
import "./styles.css";
import moment from "moment";
import {END_DATE} from "../../common/mock";

const Timeline = (props) => {
  const now = moment();
  const endDate = moment(END_DATE);
  const totDays = endDate.diff(now, 'days');
  let months = {};

  // console.log("Moment: " + moment(now).endOf('month').diff(now)/totDays);
  // let d1 = now.clone();
  // let d2 = d1.clone().add(1, "M");
  // console.log("Total days: " + totDays);
  //
  // while(d2.isBefore(endDate)) {
  //     // let days = moment(d2).diff(d1);
  //     console.log(d2.get("M"));
  //     console.log("Month Format: " + moment(d2).format("MMM") + " type: " + typeof(moment(d2).format("MMM")));
  //     console.log(moment(totDays));
  //     // d1 = d2;
  //     d2.add(1, "M")
  // }
    let currMonthSize = now.clone().endOf("month").diff(now) / endDate.diff(now) * 100;

    let d = now.clone();
    d.add(1, "M");
    while(d.isBefore(endDate)) {
        let name = d.format("MMM");
        let size = d.daysInMonth() / totDays * 100;

        months[name] = size;
        d.add(1, "M");
    }

    return (
    <div className="Timeline">
      {/*<span className="start-date-label"></span>*/}
      <div className="time-line-container">
        <div className="months-container">

            {/*left over days of current month*/}
            <div key={now.format("MMM")}
                 style={{flexBasis:`${currMonthSize}%`}}
                 className={`month even`}>
                <span>{ currMonthSize > 10 && now.format("MMM").toUpperCase()}</span>
            </div>
            {/*--------------------------------*/}
            {
                Object.entries(months).map(([name, size], ind) => {
                    return(
                        <div key={ind} style={{flexBasis:`${size}%`}} className={`month ${(ind + 1) % 2 === 0 ? "even" : "odd"}`}>
                            <span>{ size > 10 && name.toUpperCase()}</span>
                        </div>
                        );
                    }
                )
            }
        </div>
        {
          props.tasks.map(task => {
              let percent = (moment(task.date).diff(now) / endDate.diff(now)) * 100;

              return (
                <div
                  key={task.id}
                  className={`task-circle ${task === props.selectedTask ? "selected" : "on-top"}`}
                  onClick={() => {
                    props.onSelectTask(task);
                  }}
                  style={{top: `${percent}%`}}
                />
              );
            }
          )
        }
        <div className={"time-line"}></div>
      </div>
      {/*<span className="end-date-label"></span>*/}
    </div>
  )
};

export default Timeline;
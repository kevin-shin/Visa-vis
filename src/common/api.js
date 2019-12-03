import {MOCK_TASKS} from "./mock";

export const getTasks = () => {
  return {data: MOCK_TASKS, status: 200}
};

export const updateTask = (id, task) => {
  MOCK_TASKS.forEach((item, i) => {
    if (item.id === task.id) {
      MOCK_TASKS[i] = task;
    }
  });

  return {status: 200};
};
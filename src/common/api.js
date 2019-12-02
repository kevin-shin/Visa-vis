import {MOCK_TASKS} from "./mock";

export const getTasks = () => {
  return {data: MOCK_TASKS, status: 200}
};

export const updateTask = (id, task) => {
  MOCK_TASKS[id] = task;
  return {status: 200};
};
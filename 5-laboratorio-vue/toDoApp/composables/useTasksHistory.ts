import { defineStore } from "pinia";
import { ref } from "vue";

type TaskRecord = {
  id: string;
  name: string;
  description: string;
  completed: boolean;
};

const taskFactory = (task: TaskRecord) => {
  const { id, name, description, completed } = task;

  return {
    id,
    name,
    description,
    completed,
  };
};

export const useTasksHistory = defineStore("taskHistory", () => {
  const toDoList = ref<TaskRecord[]>([]);

  const addTask = (task: TaskRecord) => {
    const taskRecord = taskFactory(task);

    toDoList.value.push(taskRecord);
  };

  return {
    addTask,
    toDoList,
  };
});

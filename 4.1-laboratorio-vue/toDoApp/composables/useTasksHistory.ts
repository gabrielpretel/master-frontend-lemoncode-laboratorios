import { defineStore } from 'pinia'
import { ref } from 'vue'

export type TaskRecord = {
  id: string
  name: string
  description: string
  completed: boolean
  bgColor: string
}

const taskFactory = (task: TaskRecord) => {
  const { id, name, description, completed, bgColor } = task

  return {
    id,
    name,
    description,
    completed,
    bgColor,
  }
}

export const useTasksHistory = defineStore(
  'taskHistory',
  () => {
    const toDoList = ref<TaskRecord[]>([])

    const addTask = (task: TaskRecord) => {
      const taskRecord = taskFactory(task)
      toDoList.value.push(taskRecord)
    }

    return {
      addTask,
      toDoList,
    }
  },
  {
    persist: {
      storage: process.client ? localStorage : undefined,
    },
  },
)

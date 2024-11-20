<script setup lang="ts">
  import { ref } from 'vue'
  import {
    TaskRecord,
    useTasksHistory,
  } from '../../composables/useTasksHistory'

  import DeleteIcon from '../assets/icons/deleteIcon.svg'
  import CompleteIcon from '../assets/icons/completeIcon.svg'
  import IncompleteIcon from '../assets/icons/incompleteIcon.svg'
  import EditIcon from '../assets/icons/editIcon.svg'
  import DraggableIcon from '../assets/icons/draggableIcon.svg'
  import draggable from 'vuedraggable'
  import TheNewTaskForm from './TheNewTaskForm.vue'

  const taskHistory = useTasksHistory()

  let filteredTasks = ref<TaskRecord[]>(taskHistory.toDoList)
  let selectedFilter = ref<FilterTask>('all')
  let isEmptyCompletedTask = ref<boolean>()
  let isEmptyIncompletedTask = ref<boolean>()

  const onComplete = (currentTask: TaskRecord) => {
    taskHistory.toDoList = taskHistory.toDoList.map((task) => {
      if (task.id === currentTask.id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })

    filterTasks(selectedFilter.value)
  }

  const onDelete = (id: string) => {
    taskHistory.toDoList = taskHistory.toDoList.filter((task) => task.id !== id)
    filterTasks(selectedFilter.value)
  }

  type FilterTask = 'all' | 'completed' | 'incompleted'

  const filterTasks = (filter: FilterTask): TaskRecord[] => {
    selectedFilter.value = filter
    filteredTasks.value =
      filter === 'all'
        ? taskHistory.toDoList
        : taskHistory.toDoList.filter((task) =>
            filter === 'completed' ? task.completed : !task.completed,
          )

    isEmptyCompletedTask.value =
      filter === 'completed' && filteredTasks.value.length === 0

    isEmptyIncompletedTask.value =
      filter === 'incompleted' && filteredTasks.value.length === 0

    return filteredTasks.value
  }

  const syncOrder = (newOrder: TaskRecord[]) => {
    taskHistory.toDoList = [...newOrder]
  }
</script>

<template>
  <h2>List name</h2>
  <section class="todo-list-container">
    <div class="filters-container">
      <button
        class="button-primary"
        @click="filterTasks('all')"
        :class="{ active: selectedFilter === 'all' }"
      >
        All</button
      ><button
        class="button-primary"
        @click="filterTasks('completed')"
        :class="{ active: selectedFilter === 'completed' }"
      >
        Completed</button
      ><button
        class="button-primary"
        @click="filterTasks('incompleted')"
        :class="{ active: selectedFilter === 'incompleted' }"
      >
        Incompleted
      </button>
    </div>
    <TheNewTaskForm />
    <div
      class="empty-list empty-list--centered"
      v-if="
        taskHistory.toDoList.length === 0 ||
        isEmptyCompletedTask ||
        isEmptyIncompletedTask
      "
    >
      <p v-if="taskHistory.toDoList.length === 0">
        No tasks available at the moment. Use the button below to create a new
        note and start organizing your tasks effectively.
      </p>
      <p v-else-if="isEmptyCompletedTask">No completed tasks yet.</p>
      <p v-else>No incomplete tasks yet.</p>
    </div>

    <div class="task-list">
      <draggable
        v-model="filteredTasks"
        group="tasks"
        handle=".drag-handle"
        animation="200"
        ghost-class="dragging"
        item-key="id"
        @update:modelValue="syncOrder"
      >
        <template #item="{ element }">
          <li
            class="item"
            :key="element.id"
            :style="{
              backgroundColor: !element.completed ? element.bgColor : '#fafafa',
            }"
            :class="{ completed: element.completed }"
          >
            <DraggableIcon class="drag-handle" />
            <div class="task-content">
              <div class="task-header">
                <span>{{ element.name }}</span>

                <div class="task-buttons">
                  <button
                    @click="onComplete(element)"
                    aria-label="Complete Task"
                  >
                    <CompleteIcon v-if="!element.completed" class="icon" />
                    <template v-else>
                      <IncompleteIcon class="icon" />
                    </template>
                  </button>
                  <button aria-label="Edit Task">
                    <EditIcon class="icon" />
                  </button>
                  <button
                    @click="onDelete(element.id)"
                    aria-label="Delete Task"
                  >
                    <DeleteIcon class="icon" />
                  </button>
                </div>
              </div>
              <p v-if="element.description !== ''">
                {{ element.description }}
              </p>
            </div>
          </li>
        </template>
      </draggable>
    </div>
  </section>
</template>

<style>
  h2 {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .todo-list-container {
    position: relative;
  }

  .task-list {
    margin-top: 20px;

    & .item {
      display: flex;
      flex-direction: row;
      padding: 18px;
      border-radius: 8px;
      margin-bottom: 10px;
      max-width: 600px;
      transition:
        background-color 0.3s ease,
        scale 0.3s ease;

      & span {
        font-weight: 600;
        font-size: 1.1rem;
        align-self: center;
        padding-right: 10px;
      }

      & p {
        margin-top: 5px;
        font-size: 0.9rem;
      }

      & .task-content {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
    }
  }

  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: self-start;

    & .task-buttons {
      display: flex;
    }
    & button {
      border-radius: 8px;
      transition: 0.4s;
      font-size: 14px;
    }

    .icon {
      height: 1.2rem;
      transition: 0.4s;

      &:hover {
        scale: 1.2;
      }
    }
  }

  .empty-list {
    color: #383b42;
    font-size: 0.9rem;
    margin: 20px 0;
    background-color: #f6f8f9;
    border-radius: 8px;
    padding: 20px;
  }

  .empty-list--centered {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .empty-list p {
    margin: 10px 0;
    line-height: 1.6;
    font-size: 1rem;
  }

  .drag-handle {
    cursor: grab;
    height: 20px;
    width: 20px;
    align-self: center;
    margin-right: 10px;
    color: #383b42;
  }

  .dragging {
    opacity: 0.6;
    scale: 1.05;
    background-color: #f0f0f0;
  }

  .completed {
    text-decoration: line-through;
    background-color: #919191;
    opacity: 0.5;
  }

  .completed-message {
    text-decoration: none;
  }

  .filters-container {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    gap: 8px;
    min-height: 32px;

    & .active {
      background-color: #383b42;
      color: white;
    }
  }

  .button-primary {
    padding: 5px 10px;
    border-radius: 8px;
    background-color: #e8e8e4;
    transition: 0.4s;

    &:hover {
      background-color: #383b42;
      color: white;
    }
  }
</style>

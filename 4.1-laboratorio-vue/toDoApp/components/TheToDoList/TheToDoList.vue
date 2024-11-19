<script setup lang="ts">
  import { ref } from 'vue'
  import { TaskRecord, useTasksHistory } from '../../composables/useTasksHistory'
  import AddIcon from '../assets/icons/addIcon.svg'
  import PlusIcon from '../assets/icons/plusIcon.svg'
  import DeleteIcon from '../assets/icons/deleteIcon.svg'
  import CompleteIcon from '../assets/icons/completeIcon.svg'
  import IncompleteIcon from '../assets/icons/incompleteIcon.svg'
  import EditIcon from '../assets/icons/editIcon.svg'
  import SuccessIcon from '../assets/icons/addedIcon.svg'
  import CrossIcon from '../assets/icons/crossIcon.svg'
  import DraggaleIcon from '../assets/icons/draggableIcon.svg'
  import draggable from 'vuedraggable'

  const name = ref('')
  const description = ref('')
  const showNewTaskForm = ref(false)
  const showAlert = ref(false)

  const generateId = () => {
    return Math.random().toString(36).substring(2, 15)
  }

  const taskHistory = useTasksHistory()

  const onComplete = (currentTask: TaskRecord) => {
    taskHistory.toDoList = taskHistory.toDoList.map((task) => {
      if (currentTask.id === task.id) {
        return { ...currentTask, completed: !currentTask.completed }
      }

      return task
    })
  }

  const onDelete = (id: string) => {
    taskHistory.toDoList = taskHistory.toDoList.filter((task) => task.id !== id)
  }

  const onSubmit = () => {
    const newTask = {
      id: generateId(),
      name: name.value,
      description: description.value,
      completed: false,
      bgColor: getRandomColor(),
    }

    taskHistory.addTask(newTask)

    name.value = ''
    description.value = ''

    showNewTaskForm.value = !showNewTaskForm.value
    showAlert.value = true

    setTimeout(() => {
      showAlert.value = false
    }, 5000)
  }

  const onClick = () => {
    showNewTaskForm.value = !showNewTaskForm.value
  }

  const closeAlert = () => {
    showAlert.value = false
  }

  const colors = [
    '#FEC5BB',
    '#FCD5CE',
    '#FAE1DD',
    '#F8EDEB',
    '#E8E8E4',
    '#D8E2DC',
    '#ECE4DB',
    '#FFE5D9',
    '#FFD7BA',
    '#FEC89A',
  ]

  const getRandomColor = (): string =>
    colors[Math.floor(Math.random() * colors.length)]
</script>

<template>
  <h2>List name</h2>
  <section class="todo-list-container">
    <button aria-label="New task" class="new-task" @click="onClick()">
      <AddIcon class="new-task-icon" /> New task
    </button>
    <form
      @submit.prevent="onSubmit"
      v-if="showNewTaskForm"
      class="new-task-form"
    >
      <input type="text" v-model="name" placeholder="Task name" required />
      <textarea v-model="description" placeholder="Write a note..."></textarea>
      <button aria-label="Add Task" class="add-task-button">
        <PlusIcon /><span>Add task</span>
      </button>
    </form>
    <div class="alert-container" v-if="showAlert">
      <div class="alert-info">
        <SuccessIcon class="success-icon" />
        <p>Task added successfully.</p>
      </div>
      <button aria-label="Close alert" @click="closeAlert">
        <CrossIcon class="cross-icon" />
      </button>
    </div>
    <div
      class="empty-list empty-list--centered"
      v-if="taskHistory.toDoList.length === 0"
    >
      <p>
        <b>No tasks available at the moment.</b>
        Use the button below to create a new note and start organizing your
        tasks effectively.
      </p>
    </div>

    <div class="task-list">
      <draggable
        v-model="taskHistory.toDoList"
        group="tasks"
        handle=".drag-handle"
        animation="200"
        ghost-class="dragging"
        item-key="id"
      >
        <template #item="{ element }">
          <li class="item" :style="{ backgroundColor: element.bgColor }">
            <!-- <span class="drag-handle">⠿</span> -->
            <DraggaleIcon class="drag-handle" />
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
              <p v-if="element.description !== ''">{{ element.description }}</p>
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

  .new-task {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    transition: 0.4s;

    &:hover {
      font-weight: 600;
    }

    &:hover .new-task-icon {
      fill: #383b42;
      border-color: #383b42;
      color: white;
    }
  }

  .new-task-icon {
    fill: transparent;
    margin-right: 5px;
    transition: 0.4s;
  }

  .new-task-form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    gap: 10px;

    & input,
    textarea {
      border-radius: 8px;
      font-family: 'Anderson Grotesk', Arial, Helvetica, sans-serif;
      border: none;
      padding: 8px 20px;
      background-color: #f6f8f9;

      &:focus {
        outline: 1px solid rgb(212, 212, 212);
      }
    }

    & input {
      max-width: 300px;
    }

    & textarea {
      max-width: 600px;
      min-height: 100px;
    }

    & .add-task-button {
      display: flex;
      width: 110px;
      border-radius: 8px;
      padding: 8px;
      background-color: #f2f4f6;
      transition: 0.4s;
      font-size: 14px;

      & svg {
        height: 16px;
      }

      &:hover {
        background-color: #383b42;
        border-color: #383b42;
        color: white;
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

  .alert-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    padding: 8px;
    background-color: #d5ffe67a;
    margin-top: 10px;

    & .alert-info {
      display: flex;
      align-items: center;
    }

    & p {
      font-weight: 400;
      margin-left: 5px;
      color: #66e097;
    }
  }

  .success-icon {
    fill: white;
    color: #66e097;
  }

  ::v-deep(.success-icon svg circle) {
    stroke: white;
  }

  .cross-icon {
    height: 1.2rem;
    transition: 0.4s;
    color: #66e097;

    &:hover {
      scale: 1.2;
    }
  }

  .empty-list {
    color: #919191;
    font-size: 1.1rem;
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
</style>

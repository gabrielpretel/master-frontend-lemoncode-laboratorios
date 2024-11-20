<script setup lang="ts">
  import { ref } from 'vue'
  import PlusIcon from '../assets/icons/plusIcon.svg'
  import { useTasksHistory } from '../../composables/useTasksHistory'
  import AddIcon from '../assets/icons/addIcon.svg'
  import CompleteIcon from '../assets/icons/completeIcon.svg'
  import CrossIcon from '../assets/icons/crossIcon.svg'

  const name = ref('')
  const description = ref('')
  const showNewTaskForm = ref(false)
  const showAlert = ref(false)

  const taskHistory = useTasksHistory()

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

  const generateId = () => {
    return Math.random().toString(36).substring(2, 15)
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

  const onClick = () => {
    showNewTaskForm.value = !showNewTaskForm.value
  }

  const closeAlert = () => {
    showAlert.value = false
  }
</script>

<template>
  
  <button
    aria-label="New task"
    :class="!showNewTaskForm ? 'new-task' : 'new-task-open'"
    @click="onClick()"
  >
    <AddIcon class="new-task-icon" /> New task
  </button>
  <transition name="expand">
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
  </transition>
  <transition name="fade">
    <div class="alert-container" v-if="showAlert">
      <div class="alert-info">
        <CompleteIcon class="success-icon" />
        <p>Task added successfully.</p>
      </div>
      <button aria-label="Close alert" @click="closeAlert" class="close-button">
        <CrossIcon class="cross-icon" />
      </button>
    </div>
  </transition>
</template>

<style>
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

  .new-task-open {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    fill: #383b42;
    border-color: #383b42;
    font-weight: 600;

    & .new-task-icon {
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
      font-size: 0.9rem;
    }
  }

  .cross-icon {
    height: 1rem;
    transition: 0.4s;
    color: #66e097;

    &:hover {
      scale: 1.2;
    }
  }

  .success-icon {
    fill: white;
    color: #66e097;
    height: 20px;
  }

  .close-button {
    display: flex;
    align-self: center;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .expand-enter-active,
  .expand-leave-active {
    transition:
      max-height 1.5s ease,
      opacity 1.5s ease;
    overflow: hidden;
  }

  .expand-enter-from,
  .expand-leave-to {
    max-height: 0;
    opacity: 0;
  }

  .expand-enter-to,
  .expand-leave-from {
    max-height: 500px;
    opacity: 1;
  }

  
</style>

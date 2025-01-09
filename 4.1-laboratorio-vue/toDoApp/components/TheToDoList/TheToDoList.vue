<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { TaskRecord, useTasksLists } from '../../composables/useTasksLists'

  import DeleteIcon from '../assets/icons/deleteIcon.svg'
  import CompleteIcon from '../assets/icons/completeIcon.svg'
  import IncompleteIcon from '../assets/icons/incompleteIcon.svg'
  import EditIcon from '../assets/icons/editIcon.svg'
  import CrossIcon from '../assets/icons/crossIcon.svg'
  import DraggableIcon from '../assets/icons/draggableIcon.svg'
  import draggable from 'vuedraggable'
  import TheNewTaskForm from './TheNewTaskForm.vue'
  import { toast } from 'vue-sonner'
  import { useTransitions } from '../../composables/useTransitions'

  type FilterTask = 'all' | 'completed' | 'incompleted'

  let selectedFilter = ref<FilterTask>('all')
  let isEmptyCompletedTask = ref<boolean>()
  let isEmptyIncompletedTask = ref<boolean>()
  let editName = ref<string>('')
  let editDescription = ref<string>('')

  const taskHistory = useTasksLists()
  const { beforeEnter, enter, leave } = useTransitions()

  const onComplete = (currentTask: TaskRecord) => {
    taskHistory.toDoList = taskHistory.toDoList.map((task: TaskRecord) =>
      task.id === currentTask.id
        ? { ...task, completed: !task.completed }
        : task,
    )

    currentTask.completed
      ? toast.success('Task incompleted.')
      : toast.success('Task completed!')
  }

  const onDelete = (id: string) => {
    taskHistory.toDoList = taskHistory.toDoList.filter(
      (task: TaskRecord) => task.id !== id,
    )

    toast.success('Task deleted.')
  }

  const onEdit = (element: TaskRecord) => {
    editName.value = element.name
    editDescription.value = element.description

    toggleEditMode(element)
  }

  const toggleEditMode = (element: TaskRecord) => {
    taskHistory.toDoList = taskHistory.toDoList.map((task: TaskRecord) =>
      task.id !== element.id ? task : { ...task, editMode: !task.editMode },
    )
  }

  const filteredTasks = computed(() => {
    switch (selectedFilter.value) {
      case 'completed':
        return taskHistory.toDoList.filter(
          (task: TaskRecord) => task.completed === true,
        )
      case 'incompleted':
        return taskHistory.toDoList.filter(
          (task: TaskRecord) => task.completed === false,
        )
      default:
        return taskHistory.toDoList
    }
  })

  const syncOrder = (newOrder: TaskRecord[]) => {
    taskHistory.toDoList = [...newOrder]
  }

  const onSubmit = (element: TaskRecord) => {
    taskHistory.toDoList = taskHistory.toDoList.map((task: TaskRecord) =>
      element.id === task.id
        ? {
            ...task,
            name: editName,
            description: editDescription,
            editMode: !task.editMode,
          }
        : task,
    )

    toast.success('Task saved.')
  }
</script>

<template>
  <Toaster
    position="top-center"
    :toastOptions="{
      class: 'my-toast',
    }"
  />
  <h2>List name</h2>
  <section class="todo-list-container">
    <div class="filters-container">
      <button
        class="button-primary"
        @click="selectedFilter = 'all'"
        :class="{ active: selectedFilter === 'all' }"
      >
        All
      </button>
      <button
        class="button-primary"
        @click="selectedFilter = 'completed'"
        :class="{ active: selectedFilter === 'completed' }"
      >
        Completed
      </button>
      <button
        class="button-primary"
        @click="selectedFilter = 'incompleted'"
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
        v-auto-animate
      >
        <template #item="{ element }">
          <li
            class="item"
            :key="element.id"
            :style="{
              backgroundColor:
                !element.completed || element.editMode
                  ? element.bgColor
                  : '#fafafa',
            }"
            :class="{
              itemEditmode: element.editMode,
              completed: element.completed && !element.editMode,
            }"
          >
            <div class="item-readonly" v-if="!element.editMode">
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
                    <button aria-label="Edit Task" @click="onEdit(element)">
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
            </div>
            <transition
              @before-enter="beforeEnter"
              @enter="enter"
              @leave="leave"
            >
              <div class="item-editmode" v-show="element.editMode">
                <form
                  @submit.prevent="onSubmit(element)"
                  class="edit-form"
                  :key="element.id"
                >
                  <p>Editing task...</p>
                  <input type="text" v-model="editName" />
                  <textarea v-model="editDescription"></textarea>
                  <div class="control-buttons">
                    <button class="button-primary save-button" type="submit">
                      <CompleteIcon /> Save changes
                    </button>
                    <button
                      class="button-primary"
                      @click.prevent="onEdit(element)"
                    >
                      <CrossIcon /> Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </transition>
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

  input,
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
  .itemEditmode {
    display: flex;
    text-decoration: none;
    opacity: 1;

    & input {
      max-width: 300px;
    }

    & textarea {
      resize: none;
      max-width: 600px;
    }
  }

  .task-list {
    margin-top: 20px;

    & .item {
      display: flex;
      flex-direction: column;
      padding: 18px;
      border-radius: 8px;
      margin-bottom: 10px;
      max-width: 600px;
      transition:
        background-color 0.3s ease,
        scale 0.3s ease;

      & .item-readonly {
        display: flex;
        flex-direction: row;
      }

      & .edit-form {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 10px;

        & p {
          padding-left: 8px;
          font-weight: 900;
          font-size: 1rem;
        }
      }

      .control-buttons {
        display: flex;
        gap: 8px;

        & button {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f6f8f9;
          gap: 4px;
          font-size: 0.9rem;

          &:hover {
            background-color: #383b42;
          }

          & svg {
            height: 18px;
            width: 18px;
          }
        }
      }

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
    opacity: 0;
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

  .my-toast {
    padding: 8px;
  }

  ol[data-sonner-toaster] {
    --width: 150px !important;
  }

  .expand-enter-active,
  .expand-leave-active {
    transition:
      height 1s ease-in-out,
      opacity 1s ease-in-out,
      background-color 0.5s ease-in-out;
    overflow: hidden;
  }

  .expand-enter-from,
  .expand-leave-to {
    height: 0;
    opacity: 0;
  }

  .expand-enter-to,
  .expand-leave-from {
    height: 200px;
    opacity: 1;
  }

  .item-editmode {
    overflow: hidden;
  }
</style>

<script setup lang="ts">
  import { ref } from 'vue'
  import AddIcon from '../assets/icons/addIcon.svg'
  import { useTransitions } from '../composables/useTransitions'
  import { TaskList, useTasksLists } from '../composables/useTasksLists'
  import DeleteIcon from '../assets/icons/deleteIcon.svg'
  import CompleteIcon from '../assets/icons/completeIcon.svg'
  import EditIcon from '../assets/icons/editIcon.svg'
  import CrossIcon from '../assets/icons/crossIcon.svg'
  import DraggableIcon from '../assets/icons/draggableIcon.svg'
  import draggable from 'vuedraggable'

  const showNewListForm = ref<boolean>(false)
  const name = ref('')
  let editName = ref<string>('')

  const lists = useTasksLists()
  const { beforeEnter, enter, leave } = useTransitions()

  const onClick = () => {
    showNewListForm.value = !showNewListForm.value
  }

  const onSubmitNewList = () => {
    lists.addList()
  }
  const onSubmit = (element: TaskList) => {}

  const onEdit = (element: TaskList) => {}

  const onDelete = (id: string) => {}

  const syncOrder = (newOrder: TaskList[]) => {}
</script>

<template>
  <TheGreeting />
  <h1>My lists</h1>
  <button
    aria-label="New list"
    :class="!showNewListForm ? 'new-list' : 'new-list-open'"
    @click="onClick()"
  >
    <AddIcon class="new-list-icon" /> New list
  </button>
  <div v-auto-animate>
    <form
      @submit.prevent="onSubmitNewList"
      class="new-list-form"
      v-show="showNewListForm"
    >
      <input type="text" v-model="name" placeholder="List name" required />
    </form>
  </div>

  <section>
    <div class="task-list">
      <draggable
        group="lists"
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

<style scoped>
  .new-list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    transition: 0.4s;

    &:hover {
      font-weight: 600;
    }

    &:hover .new-list-icon {
      fill: #383b42;
      border-color: #383b42;
      color: white;
    }
  }

  .new-list-open {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    fill: #383b42;
    border-color: #383b42;
    font-weight: 600;

    & .new-list-icon {
      fill: #383b42;
      border-color: #383b42;
      color: white;
    }
  }

  .new-list-icon {
    fill: transparent;
    margin-right: 5px;
    transition: 0.4s;
  }

  .new-list-form {
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
</style>

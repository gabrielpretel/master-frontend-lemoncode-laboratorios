<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { toast } from 'vue-sonner'

  import AddIcon from '../assets/icons/addIcon.svg'
  import PlusIcon from '../assets/icons/plusIcon.svg'
  import DeleteIcon from '../assets/icons/deleteIcon.svg'
  import CompleteIcon from '../assets/icons/completeIcon.svg'
  import EditIcon from '../assets/icons/editIcon.svg'
  import CrossIcon from '../assets/icons/crossIcon.svg'
  import DraggableIcon from '../assets/icons/draggableIcon.svg'
  import draggable from 'vuedraggable'

  import { useTransitions } from '../../composables/useTransitions'
  import { useRandomColors } from '../../composables/useRandomColors'
  import { TaskList, useTasksLists } from '../../composables/useTasksLists'

  const showNewListForm = ref<boolean>(false)
  const name = ref<string>('')
  let editName = ref<string>('')

  const router = useRouter()
  const lists = useTasksLists()

  let taskListArray = computed({
    get: () => Object.values(lists.taskList),
    set: (newArray) => {
      const newTaskList: Record<string, TaskList> = {}
      newArray.forEach((list) => {
        newTaskList[list.id] = list
      })
      lists.taskList = newTaskList
    },
  })

  const { beforeEnter, enter, leave } = useTransitions()
  const randomColor = useRandomColors()

  const toggleNewListForm = () => {
    showNewListForm.value = !showNewListForm.value
  }

  const navigateToList = (listId: string) => {
    router.push(`/list/${listId}`)
  }

  const createNewList = () => {
    const newList: TaskList = {
      id: lists.generateId(),
      name: name.value,
      bgColor: randomColor.getRandomColor(),
      editMode: false,
      tasks: [],
    }

    lists.addList(newList)
    name.value = ''
  }

  const startListEditing = (list: TaskList) => {
    editName.value = list.name
    toggleEditMode(list)
  }

  const saveListEdits = (list: TaskList) => {
    taskListArray.value = taskListArray.value.map((item: TaskList) =>
      item.id === list.id
        ? {
            ...item,
            name: editName.value,
            editMode: false,
          }
        : item,
    )
  }

  const toggleEditMode = (list: TaskList) => {
    taskListArray.value = taskListArray.value.map((item: TaskList) =>
      item.id !== list.id ? item : { ...item, editMode: !item.editMode },
    )
  }

  const deleteList = (id: string) => {
    taskListArray.value = taskListArray.value.filter(
      (list: TaskList) => list.id !== id,
    )

    toast.success('List deleted.')
  }

  const reorderLists = (newOrder: TaskList[]) => {
    taskListArray.value = [...newOrder]
  }
</script>

<template>
  <TheGreeting />
  <Toaster
    position="top-center"
    :toastOptions="{
      class: 'my-toast',
    }"
  />
  <h1>My lists</h1>

  <button
    aria-label="Create a new list"
    :class="!showNewListForm ? 'new-list' : 'new-list-open'"
    @click="toggleNewListForm()"
  >
    <AddIcon class="new-list-icon" /> New list
  </button>

  <div v-auto-animate>
    <form
      @submit.prevent="createNewList"
      class="new-list-form"
      v-show="showNewListForm"
      aria-labelledby="new-list-form-title"
    >
      <h2 id="new-list-form-title" class="sr-only">New List Form</h2>

      <label for="list-name" class="sr-only">List Name</label>
      <input
        id="list-name"
        type="text"
        v-model="name"
        placeholder="List name"
        required
        aria-label="Enter the name of the list"
      />

      <button aria-label="Add this list" class="add-list-button">
        <PlusIcon /><span>Add list</span>
      </button>
    </form>
  </div>

  <div
    class="empty-list empty-list--centered"
    v-if="taskListArray.length === 0"
    role="alert"
    aria-live="polite"
  >
    <p>
      No lists available at the moment. Use the button above to create a new
      list and start organizing your tasks effectively.
    </p>
  </div>

  <section>
    <div class="task-list" role="list" aria-label="Task lists">
      <draggable
        v-model="taskListArray"
        group="lists"
        handle=".drag-handle"
        animation="200"
        ghost-class="dragging"
        item-key="id"
        @update:modelValue="reorderLists"
        v-auto-animate
      >
        <template #item="{ element }">
          <ul>
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
              role="link"
              tabindex="0"
              @click="navigateToList(element.id)"
              @keydown.enter="navigateToList(element.id)"
              @keydown.space.prevent="navigateToList(element.id)"
              :aria-label="'Navigate to task list ' + element.name"
            >
              <div class="item-readonly" v-if="!element.editMode">
                <DraggableIcon class="drag-handle" aria-label="Drag list" />
                <div class="task-content">
                  <div class="task-header">
                    <span>{{ element.name }}</span>

                    <div
                      class="task-buttons"
                      role="group"
                      aria-label="List actions"
                    >
                      <button
                        @click.stop="startListEditing(element)"
                        :aria-label="'Edit list ' + element.name"
                      >
                        <EditIcon class="icon" />
                      </button>
                      <button
                        @click.stop="deleteList(element.id)"
                        :aria-label="'Delete list ' + element.name"
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
                    @submit.prevent.stop="saveListEdits(element)"
                    class="edit-form"
                    :key="element.id"
                    aria-labelledby="'Edit list ' + element.name"
                  >
                    <p class="sr-only">Editing list...</p>

                    <label for="edit-list-name" class="sr-only"
                      >Edit List Name</label
                    >
                    <input
                      id="edit-list-name"
                      type="text"
                      v-model="editName"
                      aria-label="Edit the name of the list"
                    />

                    <div class="control-buttons">
                      <button
                        class="button-primary save-button"
                        type="submit"
                        aria-label="Save changes to the list"
                      >
                        <CompleteIcon /> Save changes
                      </button>
                      <button
                        class="button-primary"
                        @click.prevent.stop="startListEditing(element)"
                        aria-label="Cancel editing the list"
                      >
                        <CrossIcon /> Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </transition>
            </li>
          </ul>
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
    .add-list-button {
      display: flex;
      width: 110px;
      border-radius: 8px;
      padding: 8px;
      background-color: #f2f4f6;
      transition: 0.4s;
      font-size: 14px;
      text-align: center;

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

  .task-list {
    margin-top: 20px;

    & .item {
      display: flex;
      flex-direction: column;
      padding: 18px;
      border-radius: 8px;
      margin-bottom: 10px;
      max-width: 600px;
      transition: scale 0.3s ease;

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

      &:hover {
        scale: 1.03;
        cursor: pointer;
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

  .my-toast {
    padding: 8px;
  }

  ol[data-sonner-toaster] {
    --width: 150px !important;
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

    & textarea {
      resize: none;
      max-width: 600px;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>

<template>
  <h2>Todo List</h2>
  <section class="todo-list-container">
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="name" placeholder="Name" />
      <textarea v-model="description" placeholder="Description"></textarea>
      <button>Add</button>
    </form>
    <div>
      <ul>
        <li v-for="(task, index) in tasks">
          {{ task.name }}, {{ task.description }},
          <button @click="onComplete(task)">
            {{ task.completed ? "Completed" : "Complete" }}
          </button>
          <button @click="onDelete(task.id)">Delete</button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Task {
  id: string;
  name: string;
  description: string;
  completed: boolean;
}

const tasks = ref<Task[]>([]);

const name = ref("");
const description = ref("");

const generateId = () => {
  return Math.random().toString(36).substring(2, 15);
};

const onComplete = (currentTask: Task) => {
  tasks.value = tasks.value.map((task) => {
    if (currentTask.id === task.id) {
      return { ...currentTask, completed: !currentTask.completed };
    }

    return task;
  });
};

const onDelete = (id: string) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};

const onSubmit = () => {
  tasks.value.push({
    id: generateId(),
    name: name.value,
    description: description.value,
    completed: false,
  });

  name.value = "";
  description.value = "";
};
</script>

<style>
.todo-list-container {
  width: 800px;
}

form {
  display: flex;
}
</style>

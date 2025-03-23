<template>
  <div class="container">
    <div class="content">
      <div class="content-title">
        <h1>Task Manager</h1>
        <button @click="openModal" class="content-title__button">Yangi Vazifa</button>
      </div>
      <Filter />
      <div class="content-tasks">
        <Task v-bind:task="task" :index="index" v-for="(task, index) in filteredTasks" :key="index" />
      </div>
      <NewTask v-if="modalIsActive" />
    </div>
  </div>
</template>

<script setup>
import NewTask from "./components/NewTask.vue";
import Filter from "./components/Filter.vue"
import Task from "./components/Task.vue";
import { useTasks } from "./store/Tasks"
import { storeToRefs } from "pinia"


const tasksStore = useTasks()

const { filteredTasks, modalIsActive } = storeToRefs(tasksStore)
const { openModal } = tasksStore

tasksStore.$subscribe((mutation, state) => {
  localStorage.setItem("tasks", JSON.stringify(state.tasks));
}, { detached: true });


</script>
<style scoped>
.container {
  background-color: #6491b8;
  width: 100vw;
  min-height: 100vh;
  font-family: "Robot", sans-serif;
  color: white;
}

.content {
  padding: 100px 200px;
}

.content-tasks {
  margin-top: 10px;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.content-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content-title__button {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
}
</style>
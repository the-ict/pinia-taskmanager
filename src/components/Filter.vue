<template>
    <div class="content-filter">
        <p :class="filter === 'todo' && 'active'" @click="setFilter('todo')">Todo</p>
        <p :class="filter === 'done' && 'active'" @click="setFilter('done')">Done</p>
        <button :class="filter === '' && 'active'" @click="setFilter('')">All</button>
    </div>
</template>

<script setup>
import { useTasks } from "@/store/Tasks"
import { storeToRefs } from "pinia"

const { filter } = storeToRefs(useTasks())

const { setFilter } = useTasks()

</script>

<style scoped>
.content-filter {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 20px;
}

.content-filter p,
button {
    font-size: 14px;
    background-color: #e5e5e5;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    color: black;
}

.content-filter p.active,
.content-filter button.active {
    color: white;
    background-color: #222;
}

.content-filter button {
    border: none;
    outline: none;
}
</style>
<template>
    <div class="task">
        <h3>{{ props.task.name }}</h3>
        <p>{{ props.task.description }}</p>
        <div class="task-checkbox">
            <div @click="storeTasks.toggleTask(index)">
                <input type="checkbox" :checked="props.task.completed">
                <span>Done</span>
            </div>
            <i class="fa-solid fa-trash" @click="storeTasks.removeTask(index)"></i>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue"
import { useTasks } from "@/store/Tasks"

const storeTasks = useTasks()

const props = defineProps(["task", "index"])

</script>

<style scoped>
.task {
    width: 200px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #efefef;
    color: black;
    transition: all 200ms ease-in-out;
}

.task:hover {
    background-color: #fdfdfd;
}

.task h3 {
    border-bottom: 1px solid #000;
    font-size: 16px;
}

.task p {
    margin-top: 10px;
    font-size: 14px;
    color: #000814;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.task-checkbox {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    justify-content: space-between;
}

.task-checkbox div {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>
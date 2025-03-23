<template>
    <div class="content-container">
        <div class="content-newTask">
            <i class="fa-solid fa-xmark" @click="closeModal"></i>
            <label>Nomini kiriting</label>
            <input v-model="name" type="text" placeholder="nomi...">
            <label>Tavsifi..</label>
            <textarea v-model="description" placeholder="tavsif..."></textarea>
            <button @click="addTask({ completed: false, name, description })">Yaratish</button>
        </div>
    </div>
</template>

<script setup>
import { useTasks } from "@/store/Tasks"
import { ref } from "vue"

const storeTasks = useTasks()

const { closeModal, addTask } = storeTasks

const name = ref("")
const description = ref("")


</script>

<style scoped>
.content-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.content-newTask {
    width: 300px;
    background-color: #fdfdfd;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px 20px;
    border-radius: 3px;
    position: relative;
}

.content-newTask label {
    font-size: 12px;
    color: gray;
}

.content-newTask input {
    padding: 5px 10px;
}

.content-newTask textarea {
    padding: 5px 10px;
    height: 100px;
}

.content-newTask button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #bde0fe;
    transition: all 300ms ease-in-out;
    border: none;
    outline: none;
    border-radius: 3px;
}

.content-newTask button:hover {
    background-color: #a2d2ff;
}

.content-newTask i {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    font-size: 20px;
    z-index: 10;
    color: black;
}
</style>
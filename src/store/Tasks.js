import { defineStore } from 'pinia';

export const useTasks = defineStore('tasks', {
    state: () => ({
        tasks: JSON.parse(localStorage.getItem("tasks")) || [],
        modalIsActive: false
    }),
    getters: {
        filteredTasks: (state) => {
            return state.tasks.filter((task) => {
                if (state.filter === "done") return task.completed;
                if (state.filter === "todo") return !task.completed;
                return true;
            });
        }
    },
    actions: {
        addTask(task) {
            this.tasks.push(task);
            this.modalIsActive = false
        },
        toggleTask(id) {
            const task = this.tasks.find((t, i) => i === id);
            if (task) {
                task.completed = !task.completed;
            }
        },
        removeTask(id) {
            this.tasks = this.tasks.filter((t, i) => i !== id)
        },
        openModal() {
            this.modalIsActive = true
        },
        closeModal() {
            this.modalIsActive = false
        }
    }
});
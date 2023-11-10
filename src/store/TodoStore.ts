import { defineStore } from "pinia";

interface ITodo {
    id: number
    text: string
    completed: boolean
}

const fakeBackendResponseTodos = [
    {id: 1, text: "blinka med ögat", completed: false},
    {id: 2, text: "ät äppelpaj", completed: false},
    {id: 3, text: "vinka till statsministern", completed: false}
]

const useTodoStore = defineStore("TodoStore", {
    state: () => {
        return {
            todos: [] as ITodo[]
        }
    },
    actions: {
        async fetchTodos() {
            setTimeout(() => {
                this.todos = fakeBackendResponseTodos
            }, 1500);
        }
    },
    getters: {
        all(): ITodo[] {
            return this.todos
        },
        incomplete() : ITodo[] {
            return this.todos.filter(todo => !todo.completed)
        },
        complete() : ITodo[] {
            return this.todos.filter(todo => todo.completed)
        },
    }
})

export default useTodoStore
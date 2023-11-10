<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ id: number, text: string, completed: boolean }>()

const fakeItems = ref([
    {id: 1, text: "blinka med ögat", completed: false},
    {id: 2, text: "ät äppelpaj", completed: false},
    {id: 3, text: "vinka till statsministern", completed: false}
])

</script>

<template v-for="item in fakeItems">
    <li class="todo-item">
        <h2>{{ item.text }}</h2>
        <button @click="$event => completed = true">Move item to completed</button>
    </li>
</template>




<style scoped>

</style>
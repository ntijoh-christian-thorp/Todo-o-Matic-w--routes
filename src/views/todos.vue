<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ id: number, text: string, completed: boolean }>()


const fakeItems = ref([
    {id: 1, text: "ät ett blåbär", completed: false},
    {id: 2, text: "ät två blåbär", completed: false},
    {id: 3, text: "ät blåbären", completed: false},
])

</script>

<template v-for="item in fakeItems" :key=text.id>
    <li class="todo-item">
        <p>{{ item.text }}</p>
        <button v-if="!completed">X</button>
    </li>
</template>




<style scoped>

</style>
<script setup lang="ts">

defineProps<{ id: number, text: string, completed: boolean }>()

const fakeItems = ref([
    {id: 1, text: "ät ett blåbär", completed: true},
    {id: 2, text: "ät två blåbär", completed: false},
    {id: 3, text: "ät blåbären", completed: false},
])

</script>



<template v-for="item in fakeItems" :completed>
    <li>
        <h2>{{ text }}</h2>
        <button>Re-add to todolist</button>
    </li>
</template>

<style scoped>

</style>
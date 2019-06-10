<template>
    <div>
        <li>
            {{title}}
            <button @click="$emit('remove')">remove</button>
        </li>
    </div>
</template>

<script>
    export default {
        name: 'todoItem',
        props: ['title']
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <button @click="add">add</button>
        <button @click="reset">reset</button>
    </div>
</template>

<script>
    export default {
        methods: {
            add() {
               this.$emit('add') 
            },
            reset(){
                this.$emit('reset')
            }
        },
    }
</script>

<style scoped>

</style>
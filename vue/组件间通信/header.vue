<template>
    <div>
        header{{num}}
    </div>
</template>

<script>
    export default {
        props: {
            num: {
                type: Number,
                default:0 
            },
        },
    }
</script>

<style scoped>

</style>
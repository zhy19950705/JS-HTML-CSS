<template>
    <div>
       <input v-model="currentVal" @change="change">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentVal: 0
            }
        },
        props: {
            num: {
                type: Number,
                default:0 
            },
        },
        watch: {
           num:{
               handle(val){
                   this.currentVal=val;
               },
               immediate:true
           }
        },
        methods:{
            change(val){
                this.$emit('change',val)
            }
        }
    }
</script>

<style scoped>

</style>
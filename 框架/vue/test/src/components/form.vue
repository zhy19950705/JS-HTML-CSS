<template>
    <div >
        <div v-for="(item, index) in testCheckBox" :key="index">
            <input type="checkbox" id="item.id" :value="item.id" v-model="toggle" >
            <label for="checkbox">{{item.name}}</label>
        </div>
        <input type="checkbox" value="1" v-model="toggle">
        <input type="checkbox"  value="2" v-model="toggle">
        <span>checked names: {{toggle}}</span>
        <input v-model.number="age" type="number">
        <input v-model.trim="msg">
    </div>
</template>

<script>
    export default {
        name: 'formComp',
        data: function() {
            return {
                testCheckBox: [
                    {
                        id: 1,
                        name: 'test1'
                    },
                    {
                        id: 2,
                        name: 'test2'
                    }
                ],
                toggle: [],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
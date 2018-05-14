<template>
    <div>
        <m-header :num="num"></m-header>
        <m-sider @add="add" @reset="reset"></m-sider>
        <m-body :num="num" @change="change"></m-body>
    </div>
</template>

<script>
import mHeader from 'header'
import mSider from 'sider'
import mBody from 'body'
    export default {
        data() {
            return {
                num: 0
            }
        },
        methods: {
            add() {
                this.num+=1
            },
            reset(){
                this.num=1
            },
            change(val){
                 this.num=val
            }
        },
        components:{
            mHeader,
            mSider,
            mBody
        }
    }
</script>

<style scoped>

</style>
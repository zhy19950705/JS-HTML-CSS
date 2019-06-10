<template>
  <div id="app">
    <!-- <zhentingqi></zhentingqi> -->
    <!-- <todo></todo> -->
    <testForm></testForm>
  </div>
</template>

<script>
// import zhentingqi from './components/zhentingqi.vue'
// import todo from './components/todo.vue'
import testForm from './components/form.vue';
export default {
  name: 'app',
  components: {
    // zhentingqi,
    // todo
    testForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

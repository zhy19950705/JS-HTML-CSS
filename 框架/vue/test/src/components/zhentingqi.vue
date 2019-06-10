<template>
  <div id="watch-exaple">
    <p :class="testObj">
      ask a yes/no question
      <input v-model="question">
    </p>
    <p :class="{correct: isCorrect}" :style="styleObject">{{answer}}</p>
    <template v-if="loginType === 'username'">
        <label>userName</label>
        <input placeholder="enter your userName" key="email-input">
    </template>
    <template v-else>
        <label>email</label>
        <input placeholder="enter your email" key="email-input">
    </template>
    <button @click="toggle">toggle login type</button>
    <div>
        <span v-for="(value, name, index) in testForObj" :key="name">
            {{index}} {{name}}:{{value}}
        </span>
    </div>
    <div v-for="item in testForArr" :key="item.id">
        {{ item }}
    </div>
  </div>
</template>



<script>
import _ from 'lodash';
import axios from 'axios';
export default {
  name: "zhentingqi",
  data() {
    return {
      question: "",
      answer: "i cannot give you a answer",
      isCorrect: false,
      test: true,
      loginType: 'username',
      testForObj: {
          a:1,
      },
      testForArr: [2,3,4]
    };
  },
  computed: {
      testObj: function() {
          return {
              correct: this.isCorrect
          }
      },
      styleObject: function() {
          return {
              fontSize: this.isCorrect ? '18px': '14px' 
          }
      }
  },
  watch: {
    //   question: function() {
    //       this.answer = 'waiting for you stop typing';
    //       this.debounceGetAnswer();
    //   }
  },
  created() {
      this.testForObj.b = 2;
      this.testForArr[1] =6;
      this.$watch(()=> {return this.question}, ()=>{
          this.answer = 'waiting for you stop typing';
          this.debounceGetAnswer();
      })
      this.debounceGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
      getAnswer: function(){
          if(this.question.indexOf('?') === -1) {
              this.answer = 'questions usually contains a ?'
              return
          }
          this.answer = 'thinking';
          axios.get('https://yesno.wtf/api').then((res)=>{
              this.answer = _.capitalize(res.data.answer);
              this.isCorrect = true;
              this.testObj.correct = true
          })
          .catch(error=>{
              this.answer = `${error}`
          })
      },
      toggle: function(){
          this.loginType = this.loginType === 'username' ? 'email' : 'username';
      }
  },
};
</script>

<style scoped>
    .correct{
        color: green
    }
</style>
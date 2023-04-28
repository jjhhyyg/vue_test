<template>
  <div class="student">
    <h2>学生名称: {{ name }}</h2>
    <h2>学生性别: {{ gender }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>
<script>
import {HELLO} from '@/config/constants'
import pubsub from "pubsub-js"
export default {
  name: "StudentItem",
  data() {
    return {
      name: "Rose",
      gender: "female",
    }
  },
  methods: {
    sendStudentName() {
      pubsub.publish(HELLO, 666)
    },
  },
}
</script>
<style scoped>
.student {
  background-color: orange;
  padding: 5px;
}
</style>

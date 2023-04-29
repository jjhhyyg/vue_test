<template>
  <div>
    <button @click="getInfo">获取学生信息</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "TestItem",
  data() {
    return {
      
    }
  },
  methods:{
    getInfo(){
      axios.get("http://localhost:8080/hhh/users").then(
        response => {
          console.log(response.data)
        },
        error => {error.message}
      )
    }
  }
}
</script>
<style scoped>

</style>

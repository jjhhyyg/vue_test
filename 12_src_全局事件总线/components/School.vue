<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>
<script>
import {HELLO} from '@/config/constants'
export default {
  name: "SchoolItem",
  data() {
    return {
      name: "USTB",
      address: "beijing",
    }
  },
  mounted() {
    this.$bus.$on(HELLO, (data) => {
      console.log("我是School组件，收到了数据", data)
    })
  },
  beforeDestroy(){
    this.$bus.$off(HELLO)
  }
}
</script>
<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>

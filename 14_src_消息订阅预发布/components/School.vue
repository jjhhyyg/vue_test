<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>
<script>
import { HELLO } from "@/config/constants"
import pubsub from "pubsub-js"
export default {
  name: "SchoolItem",
  data() {
    return {
      name: "USTB",
      address: "beijing",
      pubId: "",
    }
  },
  mounted() {
    // 每次订阅都会生成一个新的pubId，需要通过该Id来取消消息订阅
    this.pubId = pubsub.subscribe(HELLO, function (msgName, data) {
      console.log("有人发布了hello消息，hello消息的回调执行了", data)
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
  },
}
</script>
<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>

<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <Transition appear>
      <h1 v-show="isShow">你好啊！</h1>
    </Transition>
    <Transition name="hello">
      <h1 v-show="isShow">你好啊！</h1>
    </Transition>
  </div>
</template>
<script>
export default {
  name: "TestItem",
  data() {
    return {
      isShow: true,
    }
  },
}
</script>
<style scoped>
h1 {
  background-color: orange;
}

.v-enter-active {
  animation: atguigu 1s;
}

.v-leave-active {
  animation: atguigu 1s reverse;
}

.hello-enter-active {
  animation: atguigu 0.5s;
}

.hello-leave-active {
  animation: atguigu 0.5s reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>

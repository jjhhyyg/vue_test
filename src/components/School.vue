<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>School name: {{ name }}</h2>
        <h2>School address: {{ address }}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default{
    name: "SchoolInfo",
    data() {
        return {
            name: "USTB",
            address: "学院路30号",
        };
    },
    methods: {
        showName() {
            alert(this.name)
        }
    },
};
</script>

<style>
/* 组件的样式 */
.demo {
    background-color: orange;
}
button {
    background-color: thistle;
}
</style>

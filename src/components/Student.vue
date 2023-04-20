<template>
    <div class="student">
        <h2>学生名称: {{ name }}</h2>
        <h2>学生性别: {{ gender }}</h2>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点我+1</button>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑sonToFather事件</button>
        <button @click="death">销毁当前Student组件的实例对象vc</button>
    </div>
</template>
<script>

export default {
    name: 'StudentItem',
    data() {
        return {
            name: 'Rose',
            gender: 'female',
            sum: 0,
        }
    },
    methods: {
        sendStudentName(){
            this.$emit('sonToFather', this.name)
            this.$emit('test1')
        },
        unbind(){
            // 只适用于解绑一个事件
            // this.$off('sonToFather')
            // 解绑多个事件
            this.$off(['sonToFather', 'test1'])
        },
        death(){
            this.$destroy()
        },
        add(){
            // 早期教程中销毁vc实例对象后，原生绑定的事件还可以触发（比如现在的console.log）
            // 现在所有事件都不能触发了
            console.log('add 回调被调用了')
            this.sum++
        }
    }
    
}
</script>
<style scoped>
    .student {
        background-color: orange;
        padding: 5px;
    }
</style>
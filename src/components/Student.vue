<template>
    <div class="student">
        <h2>学生名称: {{ name }}</h2>
        <h2>学生性别: {{ gender }}</h2>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑sonToFather事件</button>
    </div>
</template>
<script>

export default {
    name: 'StudentItem',
    data() {
        return {
            name: 'Rose',
            gender: 'female'
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
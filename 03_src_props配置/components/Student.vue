<template>
    <div class="student">
        <h1>{{ msg }}</h1>
        <h2>学生名称: {{ name }}</h2>
        <h2>学生性别: {{ gender }}</h2>
        <h2>学生年龄: {{ myAge }}</h2>
        <button @click="ageIncreament">点我+1岁</button>
    </div>
</template>
<script>
export default {
    name: 'StudentItem',
    data() {
        return {
            msg: '我是USTB的学生',
            myAge: this.age
        }
    },
    methods: {
        ageIncreament(){
            this.myAge++
        }
    },
    // 1. 简单接受
    props:['name', 'gender', 'age']
    // 2. 带类型接受，接受的同时对数据进行类型限制
    // props:{
    //     name: String,
    //     gender: String,
    //     age: Number
    // }
    // 3. 接受的同时对数据进行类型+默认值+必要性的限制
    // props: {
    //     name: {
    //         type: String,
    //         required: true
    //     },
    //     gender: {
    //         type: String,
    //         required: true
    //     },
    //     age: {
    //         type: Number,
    //         required: false,
    //         default: 88
    //     },
    // }
}
</script>
<style>
.student {
    background-color: orange;
    ;
}
</style>
<template lang="zh">
    <div>
        <h1>{{msg}}学生姓名是：{{studentName}}</h1>
        <!-- 组件也可以写点击事件 -->
        <!-- @click.native告诉vue是原生事件，将把这个触发事件交给Student组件最外层的div去管理 -->
        <Student ref="student" @click.native="show"/>
        <hr>
        <School :getSchoolName="getSchoolName"/>
    </div>
</template>
<script>
import Student from './components/Student'
import School from './components/School'

export default {
    name: 'App',
    components: {Student, School},
    methods: {
        getSchoolName(name){
            console.log('App 收到了学校名：' + name)
        },
        getStudentName(name){
            this.studentName = name
        },
        m1(){
            console.log('test1事件被触发了')
        },
        show(){
            alert(123)
        }
    },
    data() {
        return {
            msg: '你好啊！',
            studentName: ''
        }
    },
    mounted(){
        // 第二个参数不能用function命名，否则其中的this指的是Student组件，箭头函数没有自己的this，往外找就找到了App组件的实例对象
        // 谁触发的事件，回调函数中的this指的就是那个组件
        // 不推荐这种写法
        // this.$refs.student.$on('sonToFather', (name)=>{
        //     this.studentName = name
        // })
        // 推荐写法
        this.$refs.student.$on('sonToFather', this.getStudentName)
    }
}
</script>
<style lang="zh">
    
</style>
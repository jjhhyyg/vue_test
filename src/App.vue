<template lang="zh">
    <div>
        <!-- 第一种写法 -->
        <!-- 给组件实例对象vc上绑定一个事件，事件名叫sonToFather，触发这个事件后，demo函数就被调用 -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
        <!-- <Student v-on:sonToFather="getStudentName"/> -->
        <!-- 只触发一次 -->
        <!-- <Student v-on:sonToFather.once="getStudentName"/> -->

        <hr>
        <!-- 第二种写法 -->
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>
        
        <!-- 第三种写法 -->
        <!-- ref绑定，灵活性强=》见mounted钩子 -->
        <Student ref="student"/>
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
            console.log('demo被调用了!', '名字为: ' + name)
        }
    },
    mounted() {
        // 三秒钟之后才可以触发事件
        // setTimeout(() => {
        //     this.$refs.student.$on('sonToFather', this.getStudentName)
        // }, 3000)

        // 只触发一次事件
        this.$refs.student.$once('sonToFather', this.getStudentName)
    },
}
</script>
<style lang="zh">
    
</style>
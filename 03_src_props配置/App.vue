<template lang="zh">
    <div>
        <!-- 
            为什么给age加上 ":" 
            : 是 v-bind 的简写，返回给age的是引号内执行的表达式的结果
            如果不加，则返回给age的是一个字符串，对之后的计算有阻碍，加上后返回的就是数字了
        -->
        <Student name="rose" gender="female" :age="14"/>
        <hr>
        <Student/>
        <hr>
        <Student/>
    </div>
</template>
<script>
import Student from './components/Student'

export default {
    name: 'App',
    components: {Student},
}
</script>
<style lang="zh">
    
</style>
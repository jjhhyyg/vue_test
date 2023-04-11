<template>
    <div class="student">
        <h2 @click="showName">学生名称: {{ name }}</h2>
        <h2>学生性别: {{ gender }}</h2>
        <h2>x = {{ x }}, y = {{ y}}</h2>
    </div>
</template>
<script>
// 引入一个混合
import {mixin, mixin2} from '../mixin'
export default {
    name: 'StudentItem',
    data() {
        return {
            name: 'Rose',
            gender: 'female'
        }
    },
    mixins: [mixin, mixin2]
    
}
</script>
<style>
.student {
    background-color: orange;
    ;
}
</style>
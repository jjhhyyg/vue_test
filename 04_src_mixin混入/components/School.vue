<template>
    <div class="school">
        <h2 @click="showName">学校名称: {{ name }}</h2>
        <h2>学校地址: {{ address }}</h2>
        <h2>x = {{ x }}, y = {{ y }}</h2>
    </div>
</template>
<script>
import {mixin, mixin2} from '../mixin'
export default {
    name: 'SchoolItem',
    data() {
        return {
            name: 'USTB',
            address: 'beijing'
        }
    },
    // 可以有多个混合
    mixins: [mixin, mixin2]
}
</script>
<style>
.school {
    background-color: greenyellow;
    ;
}
</style>
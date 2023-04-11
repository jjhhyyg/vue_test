<template>
    <div class="demo">
        <h2 class="qwe">学校名称: {{ name }}</h2>
        <h2>学校地址: {{ address | mySLice}}</h2>
    </div>
</template>
<script>
export default {
    name: 'SchoolItem',
    data() {
        return {
            name: 'USTB',
            address: 'beijing'
        }
    },
}
</script>
<style scoped lang="less">
    .demo{
        background-color: skyblue;
        .qwe{
            font-size: 40px;
        }
    }
</style>
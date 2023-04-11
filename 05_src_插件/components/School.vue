<template>
    <div class="school">
        <h2>学校名称: {{ name }}</h2>
        <h2>学校地址: {{ address | mySLice}}</h2>
        <button @click="hello">hello</button>
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
<style>
.school {
    background-color: greenyellow;
    ;
}
</style>
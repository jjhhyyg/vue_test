<template>
    <div class="student">
        <h2>学生名称: {{ name }}</h2>
        <h2>学生性别: {{ gender }}</h2>
        <input type="text" v-fbind:value="name">
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
}
</script>
<style>
.student {
    background-color: orange;
    ;
}
</style>
<template>
    <div class="demo">
        <h2>学生名称: {{ name }}</h2>
        <h2>学生性别: {{ gender }}</h2>
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
<style scoped lang="css">
    .demo {
        background-color: orange;
    }
</style>
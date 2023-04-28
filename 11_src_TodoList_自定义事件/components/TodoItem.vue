<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)" />
            <span>{{ todo.content }}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>
<script>
export default {
    name: 'TodoItem',
    props: ['todo', 'checkTodoItem', 'deleteTodoItem'],
    methods: {
        // 勾选 or 取消勾选
        handleCheck(id) {
            // 通知App组件将对应的todo对象的done值取反
            this.checkTodoItem(id)
        },
        // 删除
        handleDelete(id){
            // confirm函数如果点击确定就返回true，反之返回false
            if(confirm('确定删除吗？')){
                // 通知App删除对应id值的todoItem
                this.deleteTodoItem(id)
            }
        }
    }
}
</script>
<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover{
    background-color: #ddd;
}

li:hover button{
    display: inline;
}

</style>
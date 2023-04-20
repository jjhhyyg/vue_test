<template>

        <div id="root">
            <div class="todo-container">
                <div class="todo-wrap">
                    <TodoInsertBar :addTodoItem="addTodoItem"/>
                    <TodoList :todos="todos" :checkTodoItem="checkTodoItem" :deleteTodoItem="deleteTodoItem"/>
                    <TodoListFooter :todos="todos" :checkAllTodoItem="checkAllTodoItem" :clearAllTodoItem="clearAllTodoItem"/>
                </div>
            </div>
        </div>

</template>
<script>
import TodoInsertBar from './components/TodoInsertBar';
import TodoList from './components/TodoList';
import TodoListFooter from './components/TodoListFooter';

export default {
    name: 'App',
    components: { TodoInsertBar, TodoList, TodoListFooter },
    data() {
        return {
            todos: [
                {id: '001', content: '英语', completed: true},
                {id: '002', content: '数学', completed: true},
                {id: '003', content: '数据库', completed: false},
            ]
        }
    },
    methods: {
        // 添加一个todo
        addTodoItem(todoObj){
            this.todos.unshift(todoObj)
        },
        // 勾选or取消勾选一个todo
        checkTodoItem(id){
            this.todos.forEach((todo)=>{
                if(todo.id == id){todo.completed = !todo.completed}
            })
        },
        // 删除一个todo
        deleteTodoItem(id){
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        // 全选 or 全不选
        checkAllTodoItem(checked){
            this.todos.forEach(todo => todo.completed = checked)
        },
        clearAllTodoItem(){
            this.todos = this.todos.filter(todo=>!todo.completed)
        }
    }
}
</script>
<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}


/*app*/
.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
<template>
    <div class="todo-footer" v-show="totalTodoNumber">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll" ref="itemCheckBox" /> -->
            <input type="checkbox" v-model="isAll" ref="itemCheckBox" />
        </label>
        <span>
            <span>已完成{{ completedTodoNumber }}</span> / 全部{{ totalTodoNumber }}
        </span>
        <button class="btn btn-danger">清除已完成任务</button>
    </div>
</template>
<script>
export default {
    name: 'TodoListFooter',
    props: ['todos', 'checkAllTodoItem'],
    computed: {
        isAll: {
            get() {
                return this.totalTodoNumber === this.completedTodoNumber && this.totalTodoNumber > 0
            },
            set(val){
                this.checkAllTodoItem(val)
            }
        },
        totalTodoNumber() {
            return this.todos.length
        },
        completedTodoNumber() {
            // 法1
            // return this.todos.filter(todo => todo.completed == true).length
            // 法2：用reduce实现条件统计，注意括号！
            return this.todos.reduce((pre, curr) => (pre + (curr.completed ? 1 : 0)), 0)
        }
    },
}
</script>
<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>
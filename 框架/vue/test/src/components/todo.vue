<template>
    <div>
        <div @click="say($event)">
            <button @click.stop="warn('warning', $event)">testEvent</button>
        </div>
        <form @submit.prevent="addNewTodo">
            <label for="new-todo">add a todo</label>
            <input v-model="newTodoText" id="new-todo" placeholder="feed the cat">
            <button>add</button>
        </form>
        <ul>
            <todoItem v-for="(todo, index) in todos" 
            :key="todo.id"
            :title="todo.title"
            @remove="todos.splice(index,1)"></todoItem>
        </ul>
    </div>
</template>

<script>
    import todoItem from './todoItem.vue';
    export default {
        name: 'todoList',
        components: {todoItem},
        data: function() {
            return {
                newTodoText: '',
                todos: [
                    {
                        id:1,
                        title: 'do the dishes'
                    },
                    {
                        id:2,
                        title: 'take out the trash'
                    }
                ],
                nextTodoId: 3
            }
        },
        methods: {
            addNewTodo: function() {
                this.todos.push({
                    id:this.nextTodoId++,
                    title: this.newTodoText
                })
            },
            warn: function(message, event) {
                event && event.preventDefault();
                alert(message)
            },
            say: function(event) {
                // event && event.stopPropagation();
                alert('hi')
            }
        }
    }
    
</script>

<style lang="scss" scoped>

</style>
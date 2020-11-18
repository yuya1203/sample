<template>
  <div>
    <!-- {{ todos }} -->
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <!-- {{ todo }} -->
        <span v-if="todo.created">
          <input type="checkbox" v-bind:checked="todo.done" @change="toggle(todo)">
          <!-- doneがtrueの場合、classにdoneが適用される -->
          <span v-bind:class="{ done: todo.done }">
            {{ todo.name }} {{ todo.created.toDate() | dateFilter }}
          </span>
          <button v-on:click="remove(todo.id)">X</button>
          <!-- {{ todo.id }} -->
        </span>
      </li>
    </ul>
    <div class="form">
      <!-- prevantでsubmit押下時にページリロードするのを防ぐ -->
      <form v-on:submit.prevent="add">
        <input v-model="name">
        <button>Add</button>
      </form>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    data: function() {
      return {
        name: '',
        done: false
      }
    },
    created: function() {
      this.$store.dispatch('todos/init')
    },
    methods: {
      add() {
        this.$store.dispatch('todos/add', this.name)
        // nameの初期化
        this.name = ''
      },
      remove(id) {
        this.$store.dispatch('todos/remove', id)
      },
      toggle(todo) {
        this.$store.dispatch('todos/toggle', todo)
      }
    },
    computed: {
      // データをcloudfirestoreから取得
      todos() {
        // return this.$store.state.todos.todos
        return this.$store.getters['todos/orderdTodos']
      }
    },
    filters: {
      dateFilter: function(date) {
        return moment(date).format('YYYY/MM/DD HH:mm:ss')
      }
    }
  }
</script>

<style>
  li > span > span.done {
    text-decoration: line-through;
  }
</style>

<template>
  <div id="app">
    <HelloWorld v-bind:title="message" v-bind:num="num" />
  </div>
</template>

<script>
  import HelloWorld from './components/calc.vue'

   export default {
    name: 'app', 
    components: {
      HelloWorld
    }, 
      data: function() {
        return {
          message: 'validate', 
          num: 'abc', 
        };
      }
    }
  </script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 5px;
}
tr td {
  padding: 5px;
  border: 1px solid gray;
}
tr th {
  padding: 5px;
  border: 1px solid gray;
}
tr th.head {
  background-color: black;
  color: white;
}
</style>

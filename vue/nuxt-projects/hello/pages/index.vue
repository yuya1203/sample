<template>
  <div class="container">
    <p>{{ message }}</p>
    <hr>
    <router-link to="/price">Price Page</router-link>
    <router-link to="/myPage">My Page</router-link>
  </div>
</template>

<script>

export default {
  data: function(a) {
    return {
      message: 'Hello Nuxt.js'
    }
  }
}
</script>

<style>

</style>

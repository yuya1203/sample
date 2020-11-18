<template>
  <div class="container">
    <div>
     <!-- {{ users[0].id }}, {{ users[0].name}} -->
     <ul>
       <li v-for="user in users" :key="user.id">
         {{ user.id }}, {{ user.name }}, {{user.company.name}}
       </li>
     </ul>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
let url = 'https://jsonplaceholder.typicode.com/usersxxx'

export default {
  asyncData({ params }) {
    return axios.get(url)
    .then((res) => {
      return {
        users: res.data
      }
    })
  }
}
</script>

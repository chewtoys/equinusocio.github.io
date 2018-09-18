<template>
  <div class="hello">
    <router-link :to="'/blog'">
      Blog
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style lang="postcss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42B983;
}
</style>

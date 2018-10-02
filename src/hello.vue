<template>
  <div class="hello">Hello {{ who }}</div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      who: 'Vue and Webpack !!'
    }
  }
};
</script>

<style scoped>
.hello {
  padding: .5em;
  font-size: 2em;
  background-color: #fcf;
}
</style>
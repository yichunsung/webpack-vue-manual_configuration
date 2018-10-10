<template>
  <div class="app">
    <div>
      <div class="hello">
        Hello {{ who }}
      </div>
      <div class="router">
        <router-view/>
      </div>
    </div>
    
  	
  </div>
  
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
.app{
  display: flex;
  justify-content: center;
  align-items: center;
}
.hello {
  padding: .5em;
  font-size: 2em;
  background-color: #fcf;
}
.router{
  background-color: #fff;
  font-size: 14px;
}

</style>
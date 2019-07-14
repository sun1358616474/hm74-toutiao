<template>
  <div class="container">
    <img src="../../assets/images/welcome.jpg" alt />
  </div>
</template>

<script>
export default {
  created () {
    console.log(window)
    this.axios
      .get('articles')
      .then(res => console.log(res))
  }
}
</script>

<style scoped lang='less'>
.container {
  text-align: center;
}
</style>

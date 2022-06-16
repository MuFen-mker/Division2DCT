<template>
  <h1 class="title">{{ title }}</h1>
</template>
<script>
export default {
  name: 'Head-Title',
  data() {
    return {
      title: '全境封锁2武器伤害计算器',
    }
  },
}
</script>
<style scoped>
@media screen and (min-width: 730px) {
  .title {
    text-align: center;
    color: rgb(255, 144, 40);
    font-family: myfont;
    margin-top: 0;
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
@media screen and (max-width: 730px) {
  .title {
    text-align: center;
    color: rgb(255, 144, 40);
    font-family: myfont;
    margin-top: 0;
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
</style>

<template>
  <div class="all">
      <All-Root></All-Root>
      <All-Checkbox></All-Checkbox>
  </div>
</template>
<script>
  import AllRoot from './All-Root.vue';
  import AllCheckbox from './All-Checkbox.vue';
export default {
  name:'Body-All',
  components:{
    AllRoot,
    AllCheckbox
  }
}
</script>
<style scoped>
  @media screen and (min-width: 730px) {
    .all {
    border-right: 3px solid orange;
    border-radius: 0 5px 5px 0;
    display: inline-block;
    width: 55%;
    background-color: rgba(255, 166, 0, 0.05);
    padding: 1%;
    border-bottom: 3px solid orange;
    border-top: 3px solid orange;
    vertical-align: top;
    position: relative;
    right: 37.5%;
  }
  }
  @media screen and (max-width: 730px) {
    .all {
    box-sizing: border-box;
    border: 3px solid orange;
    border-radius: 5px;
    display: inline-block;
    width: 100%;
    background-color: rgba(255, 166, 0, 0.05);
    padding: 1%;
  }
  }
</style>

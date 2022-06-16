<template lang="en">
  <div class="bodyGui" id="scllTo">
    <Body-Calculation></Body-Calculation>
    <Body-All></Body-All>
  </div>
</template>
<script>
import BodyAll from './Body-All.vue';
import BodyCalculation from './Body-Calculation.vue';

export default {
  name:'Body-Gui',
  components:{
    BodyAll,
    BodyCalculation
  }
}
</script>
<style scoped>
  @media screen and (min-width: 730px) {
    .bodyGui {
    margin-bottom: 60px;
    margin-top: 30px;
    position: relative;
    vertical-align: top;
  }
  }
  @media screen and (max-width: 730px) {
    .bodyGui {
    margin-bottom: 200px;
    margin-top: 20px;
    position: relative;
  }
  }
</style>
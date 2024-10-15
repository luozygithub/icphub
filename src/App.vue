<template>
  <div id="app">
    <div class="app-content">
      <HUBHeader/>
      <router-view/>
      <HUBFooter/>
    </div>
    <div class="appbg"/>

  </div>
</template>
<script>
import HUBHeader from "@/components/HUBHeader.vue";
import HUBFooter from "@/components/HUBFooter.vue";

export default {
  components:{
    HUBHeader,
    HUBFooter
  }

}
</script>
<style lang="scss">
#app{
  //background: linear-gradient( 123deg, rgba(242,234,255,0.4) 0%, rgba(220,219,253,0.4) 100%);
  background-size: 100%;
  min-height: 100vh;
  position: relative;
  .bg-box{
    position: absolute;
    top: 100px;
    left: calc(50% - 500px);
    width: 60%;
    z-index: 0;
    height: 600px;
    background: radial-gradient(circle, rgba(239, 229, 245, 0.6), rgba(230, 189, 252, 0.6));
    filter: blur(135px);
  }
  .appbg{
    height: 1050px;
    width: 100%;
    position: absolute;
    top: 0;
    background: linear-gradient( 360deg, #FFFFFF 0%, #CECFFF 100%);

  }
  .app-content{
    position: relative;
    z-index: 1;
  }
}
</style>

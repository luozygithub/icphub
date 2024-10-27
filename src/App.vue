<template>
  <div id="app">
    <div class="app-content">
      <HUBHeader/>
      <router-view class="content"/>
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
  },
  mounted() {

    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);  // 只触发一次，进入视口后不再观察
        }
      });
    }, { threshold: 0.1 });  // 10% 可见时触发

    fadeInSections.forEach(section => observer.observe(section));
  }

}
</script>
<style lang="scss">
.content{
  min-height: 90vh;
}
body, button, input, select, p {

  line-height: 1.5!important;
}
.fade-in-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);  /* 回到正常位置 */
}
#app{
  //background: linear-gradient( 123deg, rgba(242,234,255,0.4) 0%, rgba(220,219,253,0.4) 100%);
  background-size: 100%;
  min-height: 100vh;
  position: relative;
  padding-top: 123px;
  .bg-box{
    position: absolute;
    top: 60px;
    left: calc(50% - 500px);
    width: 1000px;
    z-index: 0;
    height: 1000px;
    background: radial-gradient(circle, rgb(224, 173, 253), rgba(213, 150, 248, 0.2));
    //background: url("../../assets/images/app_bg.png");
    filter: blur(300px);
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
@media (max-width: 1200px) {
  #app{
    .bg-box{

      width: 100%;

    }
  }
}
</style>

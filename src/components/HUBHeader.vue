<script>
export default {
  data() {
    return {}
  },
  methods:{
    changeLng(){
      if(this.$i18n.locale == 'zh'){
        this.$i18n.locale = 'en'
      }else{
        this.$i18n.locale = 'zh'
      }

    }
  }
}
</script>

<template>
  <div class="HUBHeader">
    <div class="header-box">
      <img src="@/assets/images/logo.png" alt="" class="logo">
      <div class="nav-list">
        <div class="nav-item" :class="{active:$route.path == '/'}" @click="$router.push('/')">
          {{ $t("Home") }}
        </div>
        <div class="nav-item" :class="{active:$route.path == '/about'}" @click="$router.push('/about')">
          {{ $t("About") }}
        </div>
        <div class="nav-item" :class="{active:$route.path == '/solutions'}" @click="$router.push('/solutions')">
          {{ $t("Solutions") }}
        </div>
      </div>
      <div class="right-content">
        <div class="join-btn">

          {{ $t("Join the Community") }}
        </div>
        <div class="btn" @click="changeLng">
          <div v-show="$i18n.locale == 'zh'"> EN/ <strong>中文</strong></div>
          <div v-show="$i18n.locale == 'en'"> <strong>EN</strong>/中文</div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.header-box{
  width: 1200px;
  max-width: 100%;
  margin: 0px auto;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.HUBHeader {
  .right-content {
    display: flex;
    align-items: center;
    .join-btn {
      padding: 10px 20px;
      justify-content: center;
      border-radius: 10px 10px 10px 10px;
      border: 1px solid #000000;
      font-family: DM Sans, DM Sans;
      font-weight: 700;
      font-size: 14px;
      color: #000000;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .btn{
      margin-left: 20px;
      cursor: pointer;
    }
  }

  .logo {
    width: 126px;
  }

  .btn {
    font-family: PingFang SC, PingFang SC;
    font-weight: 400;
    font-size: 12px;
    color: #000000;
    line-height: 17px;
    text-align: left;
  }

  .nav-list {
    display: flex;

    .nav-item {
      font-family: DM Sans, DM Sans;

      font-size: 16px;
      color: #000000;
      padding-right: 100px;
      cursor: pointer;

      &.active {
        font-weight: 700;
      }
    }

  }
}
@media (max-width: 768px) {
  .HUBHeader {
    width: 100%;
    padding: 16px 20px;
    flex-direction: column;
    align-items: flex-start;

    .logo {
      width: 100px;
      margin-bottom: 20px;
    }

    .nav-list {
      width: 100%;
      .nav-item {
        padding-right: 0;
        padding-bottom: 10px;
        font-size: 14px;
        width: 100%;
        text-align: left;
      }
    }

    .right-content {
      margin-top: 10px;
      width: 100%;
      justify-content: space-between;

      .join-btn {
        padding: 8px 16px;
        font-size: 12px;
      }

      .btn {
        font-size: 12px;
        margin-left: 10px;
      }
    }
  }
}
</style>
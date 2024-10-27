<script>
import MenuCom from "@/components/MenuCom.vue";

export default {
  components: {
    MenuCom
  },
  data() {
    return {}
  },
  mounted() {
    const navbar = document.getElementById('HUBHeader');

    const logo = document.getElementById('logo');

    const maxScroll = 500;
    const maxOpacity = 0.9
    window.addEventListener('scroll', () => {
      const scrollTop = Math.min(window.scrollY, maxScroll);
      const opacity = (scrollTop / maxScroll) < maxOpacity?scrollTop / maxScroll:maxOpacity;
      navbar.style.backgroundColor = `rgba(162,161,255, ${opacity})`;
      navbar.style.height = 123 -  opacity * 50 + "px"
      logo.style.width   = 126  -  opacity * 50 + "px"
    });
  },
  methods: {
    changeLng() {
      if (this.$i18n.locale == 'zh') {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'zh'
      }

    }
  }
}
</script>

<template>
  <div class="HUBHeader" id="HUBHeader">
    <div class="header-box">
      <div class="logo-box">
        <img src="@/assets/images/logo.png" alt="" class="logo" @click="$router.push('/')" id="logo">
      </div>
      <MenuCom class="menu"/>
      <div class="right-content">
        <div class="join-btn">
          {{ $t("Join the Community") }}
        </div>
        <div class="btn" @click="changeLng">
          <div v-show="$i18n.locale == 'zh'"> EN/ <strong>中文</strong></div>
          <div v-show="$i18n.locale == 'en'"><strong>EN</strong>/中文</div>
        </div>
      </div>
      <MenuCom class="menu m-menu"/>
    </div>

  </div>
</template>

<style scoped lang="scss">
.header-box {
  min-width: 1200px;
  width: 90%;
  max-width: 1200px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.HUBHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: none;
  display: flex;
  align-items: center;
  z-index: 100;
  height: 123px;
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

    .btn {
      margin-left: 20px;
      cursor: pointer;
    }
  }

  .logo {
    width: 126px;
    cursor: pointer;
  }
  .logo-box{
    width: 126px;
  }
  .btn {
    font-family: Poppins, Poppins;
    font-weight: 400;
    font-size: 12px;
    color: #000000;
    line-height: 17px;
    text-align: left;
  }

  .nav-list {
    display: flex;

    .nav-item {
      font-family: Poppins;

      font-size: 18px;
      color: #000000;
      padding-right: 100px;
      cursor: pointer;

      &.active {
        font-weight: 700;
      }
    }

  }

  .menu {
    margin-left: 20px;
  }
  .m-menu{
    display: none;
  }
}

@media (max-width: 1200px) {
  .HUBHeader {
    width: 100%;
    padding: 20px 40px; /* 增加内边距 */
    flex-direction: row; /* 保持行方向以适应较大屏幕 */
    align-items: center; /* 垂直居中对齐 */
    .header-box{
      min-width: 0px!important;

    }
    .logo {
      width: 120px; /* 增加宽度 */
      margin-bottom: 0; /* 移除底部间距 */
    }

    .menu {
      display: block;
      width: 120px; /* 增加宽度 */
    }

    .nav-list {
      display: flex; /* 改为 flex 显示以适应大屏 */
      width: 100%;
      flex-direction: row; /* 行方向 */
      justify-content: space-between; /* 在大屏上均匀分布 */

      .nav-item {
        padding-right: 20px; /* 增加右边距 */
        padding-bottom: 0; /* 移除底部间距 */
        font-size: 16px; /* 增加字体大小 */
        width: auto; /* 自动宽度 */
        text-align: center; /* 中心对齐 */
      }
    }

    .right-content {
      margin-top: 0; /* 移除顶部间距 */
      width: auto; /* 自动宽度 */
      justify-content: flex-end; /* 向右对齐 */

      .join-btn {
        padding: 10px 20px; /* 增加内边距 */
        font-size: 14px; /* 增加字体大小 */
      }

      .btn {
        font-size: 14px; /* 增加字体大小 */
        margin-left: 20px; /* 增加左边距 */
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
    .header-box{
      justify-content: space-between;
    }
    .logo {
      width: 100px;
      margin-bottom: 20px;
    }

    .menu {
      display: none;
      width: 100px;
    }
    .m-menu{
      display: flex!important;
      justify-content: flex-end;
    }

    .nav-list {
      display: none;
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
      justify-content: flex-end;
      flex-grow: 0;
      margin-left: 0;
      .join-btn {
        padding: 8px 16px;
        font-size: 12px;
        display: none;
        width: 80px;
        text-align: center;
      }

      .btn {
        font-size: 12px;
        margin-left: 10px;
      }
    }
  }
}
</style>

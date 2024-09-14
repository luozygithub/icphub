<template>
  <div class="nav-container">
    <div class="hamburger-menu" @click="toggleMenu">
      <div class="line" :class="{ 'is-open': isMenuOpen }"></div>
      <div class="line" :class="{ 'is-open': isMenuOpen }"></div>
      <div class="line" :class="{ 'is-open': isMenuOpen }"></div>
    </div>

    <div class="nav-list" :class="{ 'is-open': isMenuOpen }">
      <div class="nav-item" :class="{ active: $route.path == '/' }" @click="navigate('/')">
        {{ $t("Home") }}
      </div>
      <div class="nav-item" :class="{ active: $route.path == '/about' }" @click="navigate('/about')">
        {{ $t("About") }}
      </div>
      <div class="nav-item" :class="{ active: $route.path == '/solutions' }" @click="navigate('/solutions')">
        {{ $t("Solutions") }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    navigate(path) {
      this.$router.push(path);
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
.nav-container {
  position: relative;
  z-index: 1000;
}

.hamburger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.hamburger-menu .line {
  width: 100%;
  height: 4px;
  background-color: #000;
  transition: all 0.3s ease;
}

.hamburger-menu .is-open:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.hamburger-menu .is-open:nth-child(2) {
  opacity: 0;
}

.hamburger-menu .is-open:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* 导航列表 */
.nav-list {
  display: flex;
  justify-content: center;
}

.nav-list.is-open {
  flex-direction: column;
}

.nav-item {
  font-family: DM Sans, DM Sans;
  font-size: 16px;
  color: #000000;
  padding: 15px 30px;
  cursor: pointer;
}

.nav-item.active {
  font-weight: 700;
}

/* 媒体查询: 移动端样式 */
@media (max-width: 768px) {
  /* 显示汉堡菜单 */
  .hamburger-menu {
    display: flex; /* 在移动端显示 */
  }

  /* 初始隐藏导航列表 */
  .nav-list {
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }

  /* 当菜单打开时显示 */
  .nav-list.is-open {
    display: flex;
  }

  .nav-item {
    width: 120px;
    text-align: center;
    padding: 15px 10px;
    background: #fff;

  }
}
</style>

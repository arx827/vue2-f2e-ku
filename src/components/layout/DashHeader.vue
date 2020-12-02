<template>
  <header class="main-header d-sm-flex">
    <a class="main-header__logo" href="/">
      <img
        class="main-header__logo-img"
        src="../../assets/images/copilot-logo-white.svg"
        alt="Logo"
      />
    </a>
    <nav
      class="navbar navbar-light navbar-static-top d-flex align-items-stretch"
      role="navigation"
    >
      <a class="navbar__anchor navbar__bars" @click.prevent="sidebarCollapse()">
        <font-awesome-icon icon="bars" class="navbar__barsIcon" />
        <span class="sr-only">Toggle navigation</span>
      </a>

      <div class="navbar__custom-menu">
        <ul class="navbar__nav d-flex align-items-stretch">
          <li>
            <a
              class="navbar__anchor navbar__anchor__user d-flex align-items-center"
            >
              <img
                class="navbar__anchor__user-img"
                src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "DashHeader",
  methods: {
    ...mapActions(["sidebarCollapse"])
  }
};
</script>

<style scoped lang="scss">
.main-header {
  position: relative;
  max-height: 100px;
  z-index: 10;
  &__logo {
    position: relative;
    display: block;
    background: var(--COLOR-MAIN-D30);
    color: var(--COLOR-WHITE);
    width: 100%;
    line-height: 50px;
    transition: width 0.3s ease-in-out;
    @include sm-media {
      position: absolute;
      width: 230px;
    }
    &-img {
      font-weight: 300;
      font-size: 20px;
      text-align: center;
      height: 50px;
      padding: 0.4em;
      margin-right: auto;
      margin-left: auto;
      display: block;
    }
  }
}
.navbar {
  background: var(--COLOR-MAIN);
  width: 100%;
  min-height: 50px;
  margin-left: 0;
  transition: margin-left 0.3s ease-in-out;
  padding: 0;
  @include sm-media {
    width: auto;
    flex: 1;
    margin-left: 230px;
  }
  &__anchor {
    padding-right: 15px;
    padding-left: 15px;
    height: 100%;
    display: block;
    color: var(--COLOR-WHITE);
    cursor: pointer;
    &:hover {
      background: var(--COLOR-MAIN-D30);
      color: var(--COLOR-WHITE);
    }
    &__user {
      padding-right: 5px;
      padding-left: 5px;
      &-img {
        width: 40px;
        height: 40px;
      }
    }
  }
  &__bars {
    &Icon {
      font-size: 12px;
      vertical-align: middle;
      height: 100%;
    }
  }
  &__custom-menu {
    // padding: 5px;
  }
  &__nav {
    margin: 0 5px;
    height: 100%;
  }
}

// sidebar折疊
.sidebar-collapse {
  .main-header {
    &__logo {
      @include sm-media {
        width: 50px;
      }
    }
  }
  .navbar {
    @include sm-media {
      margin-left: 50px;
    }
  }
}
</style>

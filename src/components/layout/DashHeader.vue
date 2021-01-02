<template>
  <header class="main-header d-sm-flex">
    <a class="main-header__logo" href="/">
      <img
        class="main-header__logo-img"
        src="~@assets/images/copilot-logo-white.svg"
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
          <li class="d-flex align-items-stretch">
            <a
              class="navbar__anchor navbar__search"
              @click="searchCollapse = !searchCollapse"
            >
              <font-awesome-icon icon="search" class="navbar__searchIcon" />
            </a>
            <input
              class="navbar__search__input"
              type="text"
              placeholder="Search"
              :class="{ show: searchCollapse }"
            />
          </li>
          <li class="d-flex align-items-stretch">
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
var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

export default {
  name: "DashHeader",
  data() {
    return {
      searchCollapse: false
    };
  },
  methods: _extends({}, mapActions(["sidebarCollapse"]))
};
</script>

<style scoped lang="scss">
.main-header {
  position: relative;
  max-height: 100px;
  z-index: 100;
  &__logo {
    position: relative;
    display: block;
    background: var(--COLOR-MAIN-D5);
    color: var(--COLOR-WHITE);
    width: 100%;
    line-height: var(--HEADERH);
    transition: width 0.3s ease-in-out;
    @include sm-media {
      position: absolute;
      width: var(--SIDEBAROPENW);
    }
    &-img {
      font-weight: 300;
      font-size: 20px;
      text-align: center;
      height: var(--HEADERH);
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
  min-height: var(--HEADERH);
  margin-left: 0;
  transition: margin-left 0.3s ease-in-out;
  padding: 0;
  @include sm-media {
    width: auto;
    flex: 1;
    margin-left: var(--SIDEBAROPENW);
  }
  &__anchor {
    padding-right: 15px;
    padding-left: 15px;
    display: block;
    color: var(--COLOR-WHITE);
    cursor: pointer;
    &:hover {
      background: var(--COLOR-MAIN-D5);
      color: var(--COLOR-WHITE);
    }
    &__user {
      padding-right: 5px;
      padding-left: 5px;
      &-img {
        width: 40px;
        height: 40px;
        border-radius: 5px;
      }
    }
  }
  &__bars,
  &__search {
    &Icon {
      font-size: 12px;
      vertical-align: middle;
      height: 100%;
    }
  }
  &__nav {
    margin: 0 5px;
    height: 100%;
  }
  &__search {
    &__input {
      margin: 5px 0;
      padding: 5px 0 0;
      border: 0;
      width: 0;
      background: transparent;
      border-bottom: 1px solid var(--COLOR-MAIN-D10);
      color: var(--COLOR-MAIN-L30);
      transition: all 0.2s;
      &::placeholder {
        color: var(--COLOR-MAIN-D10);
      }
      &.show {
        margin: 5px;
        width: 210px;
      }
    }
  }
}
</style>

<template>
  <div
    id="app"
    :class="{
      'sidebar-pc-close': sidebarPcClose,
      'sidebar-mb-close': sidebarmbClose
    }"
  >
    <router-view></router-view>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <!-- <div id="index">
      <article id="app__container" class="d-flex">
        <div id="app__sidebar">
          <div class="sidebar__scrollbar">
            <div class="sidebar__wrapper">
              <div class="sidebar__view">
                <ul>
                  <li>
                    <a class="sidebar__link" href="">
                      <font-awesome-icon
                        icon="home"
                        class="sidebar__linkIcon"
                      />
                      <span class="sidebar__linkName">首頁</span>
                    </a>
                  </li>
                  <li>
                    <a class="sidebar__link" href="">
                      <font-awesome-icon
                        icon="home"
                        class="sidebar__linkIcon"
                      />
                      <span class="sidebar__linkName">首頁</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section id="app__main">
          <header class="main__header"></header>
          <main class="main__container"></main>
        </section>
        <el-container id="verContainer" direction="vertical">
                <el-header id="app-header" height="auto">
                    <app-navbar />
                    <app-tagsView />
                </el-header>
                <el-main id="app-main">
                    <app-pageView />
                </el-main>
            </el-container>
      </article>
    </div> -->
  </div>
</template>
<script>
import { mapState } from "vuex";
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
  computed: _extends({}, mapState(["sidebarPcClose", "sidebarmbClose"])),
  methods: {
    // sidebarCollapse() {
    //   let Body = document.body;
    //   let BodyHasClass = Array.from(Body.classList).indexOf("sidebar-collapse");
    //   console.log(BodyHasClass);
    //   BodyHasClass === -1
    //     ? Body.classList.add("sidebar-collapse")
    //     : Body.classList.remove("sidebar-collapse");
    // }
    a() {}
  }
};</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "@/assets/scss/all.scss";
#app {
  position: relative;
  height: 100%;
  &__container {
    height: inherit;
  }
  &__sidebar {
    --SIDEBARW: 500px;
    width: var(--SIDEBARW);
    background: #304156;
    top: 0;
    left: 0;
    z-index: 10;
    height: 100%;
    user-select: none;
    transition: width 0.28s;
    transform: translateZ(0);
  }
  &__main {
    flex: 1;
  }
}

#index {
  position: relative;
  width: 100%;
  height: 100%;
  #horContainer {
    height: 100%;
  }
}

.sidebar {
  &__scrollbar {
    overflow: hidden;
    position: relative;
    height: 100%;
  }
  &__wrapper {
    overflow: auto;
    height: 100%;
  }
  &__link {
    display: block;
    font-size: 14px;
    padding: 20px;
    color: #fff;
    transition: background 0.5s;
    &Icon {
      width: 1em;
      height: 1em;
      margin-right: 1rem;
    }
    &:active {
      background: #263445;
    }
    &:hover,
    &:active {
      color: #fff;
      text-decoration: none;
    }
    @include sm-media {
      &:hover {
        background: #263445;
      }
      &:active {
        background: #263445;
      }
    }
  }
}
.main {
  &__header {
    background: #f00;
  }
  &__container {
    background: #aaa;
  }
}
</style>

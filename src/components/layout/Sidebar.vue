<template>
  <aside class="main-sidebar">
    <section class="main-sidebar__wrap">
      <div class="sidebar">
        <!-- <form class="sidebar__search" action="">
          <div>
            <span>
              <button>
                <font-awesome-icon icon="search" class="navbar__barsIcon" />
              </button>
              <input type="text" />
            </span>
          </div>
        </form> -->
        <SidebarMenu />
      </div>
    </section>
  </aside>
</template>

<script>
import SidebarMenu from "./SidebarMenu";
export default {
  name: "Sidebar",
  components: {
    SidebarMenu
  }
};</script>

<style scoped lang="scss">
.main-sidebar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: var(--SIDEBAROPENW);
  z-index: 20;
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
  background: var(--SIDEBAR-BG);
  padding-top: calc(var(--HEADERH) * 2);
  transform: translate(0, 0);
  @include sm-media {
    padding-top: var(--HEADERH);
  }
  &__wrap {
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
  }
}
.sidebar {
  &__search {
    margin: 10px;
  }
}
</style>

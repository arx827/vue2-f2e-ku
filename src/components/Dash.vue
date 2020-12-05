<template>
  <div :class="['wrapper']">
    <Dash-header />
    <Sidebar />
    <div class="content-wrapper">
      <section class="content-header d-flex justify-content-between">
        <h1>
          {{ $route.meta.showname.toUpperCase() }}
          <small>{{ $route.meta.description }}</small>
        </h1>
        <Breadcrumb />
      </section>
      <section class="main-content">
        <router-view></router-view>
      </section>
    </div>
    <Dash-footer />
  </div>
</template>

<script>
import DashHeader from "./layout/DashHeader";
import Sidebar from "./layout/Sidebar";
import DashFooter from "./layout/DashFooter";
import Breadcrumb from "./layout/Breadcrumb";
export default {
  name: "Dash",
  components: {
    DashHeader,
    Sidebar,
    DashFooter,
    Breadcrumb
  }
};
</script>

<style lang="scss">
.content-wrapper {
  background-color: var(--COLOR-MAIN-L45);
  min-height: calc(100vh - var(--HEADERH) * 2 - var(--FOOTERH));
  margin-left: 0;
  transform: translate(var(--SIDEBAROPENW), 0);
  transition: transform 0.3s ease-in-out, margin-left 0.3s ease-in-out;
  @include sm-media {
    min-height: calc(100vh - var(--HEADERH) - var(--FOOTERH));
    margin-left: var(--SIDEBAROPENW);
    transform: translate(0, 0);
  }
}
.content-header {
  padding: 15px 15px 0;
  > h1 {
    font-size: 24px;
    margin: 0;
    > small {
      font-size: 15px;
      display: inline-block;
      padding-left: 4px;
      font-weight: 300;
    }
  }
}
.main-content {
  padding: 15px;
}

// sidebar pc 折疊
.sidebar-pc-close {
  .main-header {
    &__logo {
      @include sm-media {
        width: var(--SIDEBARCLOSEW);
      }
    }
  }
  .navbar {
    @include sm-media {
      margin-left: var(--SIDEBARCLOSEW);
    }
  }
  .main-sidebar {
    @include sm-media {
      width: var(--SIDEBARCLOSEW);
    }
  }
  .sidebar {
    &__search {
      @include sm-media {
        display: none;
      }
    }
  }
  .menu {
    &__header {
      @include sm-media {
        display: none;
      }
    }
    &__link {
      &Txt {
        @include sm-media {
          display: none;
        }
      }
    }
  }
  .content-wrapper,
  .main-footer {
    @include sm-media {
      margin-left: var(--SIDEBARCLOSEW);
    }
  }
}

// sidebar mb 折疊
.sidebar-mb-close {
  .main-sidebar {
    transform: translate(calc((var(--SIDEBAROPENW)) * -1), 0);
    @include sm-media {
      transform: translate(0, 0);
    }
  }
  .content-wrapper,
  .main-footer {
    transform: translate(0, 0);
  }
}
</style>

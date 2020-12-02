<template>
  <div :class="['wrapper']">
    <dash-header />
    <sidebar />
    <div class="content-wrapper">
      <section class="content-header">1</section>
      <router-view></router-view>
    </div>
    <dash-footer />
  </div>
</template>

<script>
import dashHeader from "./layout/DashHeader";
import sidebar from "./layout/Sidebar";
import dashFooter from "./layout/DashFooter";
export default {
  name: "Dash",
  components: {
    dashHeader,
    sidebar,
    dashFooter
  }
};
</script>

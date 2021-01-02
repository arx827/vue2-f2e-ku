<template>
  <div
    id="notFound"
    class="d-flex flex-column justify-content-center align-items-center"
  >
    <img src="~@assets/images/logo.png" class="logo" />
    <div class="text-center">
      <h1>You are lost.</h1>
      <h4>This page doesn't exist.</h4>
      <router-link to="/" class="vertical-5p lead">Take me home.</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFound"
};
</script>

<style>
#notFound {
  color: var(--COLOR-WHITE);
  min-height: 100vh;
}
.logo {
  width: 15rem;
  padding: 3rem;
}
</style>

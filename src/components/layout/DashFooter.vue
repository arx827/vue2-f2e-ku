<template>
  <footer class="main-footer">
    <strong>Copyright &copy; {{ year }}</strong>
    All rights reserved.
  </footer>
</template>

<script>
export default {
  name: "DashFooter",
  data: function () {
    return {
      year: new Date().getFullYear()
    };
  }
};</script>

<style lang="scss">
.main-footer {
  background-color: var(--FOOTER-BG);
  color: var(--FOOTER-TXT);
  height: var(--FOOTERH);
  padding: 15px;
  font-size: 13px;
  border-top: 1px solid var(--FOOTER-BORDER);
  margin-left: 0;
  transform: translate(var(--SIDEBAROPENW), 0);
  transition: transform 0.3s ease-in-out, margin-left 0.3s ease-in-out;
  @include sm-media {
    margin-left: var(--SIDEBAROPENW);
    transform: translate(0, 0);
  }
}
</style>

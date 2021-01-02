<template>
  <ul class="sidebar__menu">
    <li class="menu__header">功能選單</li>
    <li class="menu__link">
      <font-awesome-icon icon="link" class="menu__linkIcon" />
      <span class="menu__linkTxt">連結</span>
    </li>
    <li class="menu__link">
      <font-awesome-icon icon="link" class="menu__linkIcon" />
      <span class="menu__linkTxt">文章</span>
    </li>
    <li class="menu__link">
      <font-awesome-icon icon="link" class="menu__linkIcon" />
      <span class="menu__linkTxt">工具</span>
    </li>
    <li class="menu__link">
      <font-awesome-icon icon="link" class="menu__linkIcon" />
      <span class="menu__linkTxt">會員中心</span>
    </li>
    <li class="menu__link">
      <font-awesome-icon icon="link" class="menu__linkIcon" />
      <span class="menu__linkTxt">我的收藏</span>
    </li>
    <li class="menu__link">
      <font-awesome-icon icon="link" class="menu__linkIcon" />
      <span class="menu__linkTxt">新增文章</span>
    </li>
    <li class="menu__link">
      <font-awesome-icon icon="link" class="menu__linkIcon" />
      <span class="menu__linkTxt">新增工具</span>
    </li>
    <li class="menu__link">
      <font-awesome-icon icon="link" class="menu__linkIcon" />
      <span class="menu__linkTxt">新增連結</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SidebarMenu"
};
</script>

<style lang="scss">
.menu {
  &__header {
    color: var(--SIDEBAR-MENU-HEADER-TXT);
    background: var(--SIDEBAR-MENU-HEADER-BG);
    padding: 10px 25px 10px 15px;
    font-size: 12px;
  }
  &__link {
    color: var(--SIDEBAR-MENU-LINK-TXT);
    font-size: 14px;
    padding: 12px 15px;
    border-left: 3px solid transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 200;
    letter-spacing: 2px;
    min-height: 50px;
    &:active,
    &--active {
      border-left: 3px solid $COLOR-MAIN;
      background: var(--SIDEBAR-MENU-HOVER-BG);
    }
    @include sm-media {
      &:hover {
        border-left: 3px solid $COLOR-MAIN;
        background: var(--SIDEBAR-MENU-HOVER-BG);
      }
    }
    &Icon {
      font-size: 12px;
      margin-right: 8px;
    }
  }
}
</style>

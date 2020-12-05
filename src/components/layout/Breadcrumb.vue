<template>
  <div class="breadcrumb">
    <ul class="breadcrumb__ul">
      <li
        class="breadcrumb__li"
        v-for="(breadcrumb, idx) in breadcrumbList"
        :key="idx"
        @click="routeTo(idx)"
        :class="{ breadcrumb__link: !!breadcrumb.link }"
      >
        {{ breadcrumb.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      breadcrumbList: []
    };
  },
  mounted() {
    this.updateList();
  },
  watch: {
    $route() {
      this.updateList();
    }
  },
  methods: {
    routeTo(pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link)
        this.$router.push(this.breadcrumbList[pRouteTo].link);
    },
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb;
    }
  }
};
</script>

<style scoped lang="scss">
.breadcrumb {
  font-size: 12px;
  padding: 7px 5px;
  border-radius: 2px;
  margin: 0;
  &__ul {
    display: flex;
    margin: 0;
    padding: 0;
  }
  &__li {
    cursor: pointer;
    color: #444;
    .icon {
      margin-right: 5px;
    }
    &:last-child {
      cursor: default;
    }
    &:not(:last-child) {
      &:after {
        content: ">";
        color: #ccc;
        padding: 0 5px;
      }
    }
  }
  &__link {
    color: var(--COLOR-MAIN);
  }
}
</style>

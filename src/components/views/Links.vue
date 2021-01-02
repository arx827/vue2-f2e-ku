<template>
  <section class="main-content">
    <div class="page__section">
      <!-- <h2>CSS</h2> -->
      <div class="category__group d-flex flex-wrap">
        <button class="category__btn">
          <span class="category__btn__title">全部</span
          ><span class="category__btn__num">(372)</span>
        </button>
        <button class="category__btn category__btn--active">
          <span class="category__btn__title">CSS</span
          ><span class="category__btn__num">(372)</span>
        </button>
        <button class="category__btn">
          <span class="category__btn__title">Webpack</span
          ><span class="category__btn__num">(372)</span>
        </button>
        <button class="category__btn">
          <span class="category__btn__title">NPM</span
          ><span class="category__btn__num">(372)</span>
        </button>
        <button class="category__btn">
          <span class="category__btn__title">Node.js</span
          ><span class="category__btn__num">(372)</span>
        </button>
        <button class="category__btn">
          <span class="category__btn__title">Vue</span
          ><span class="category__btn__num">(372)</span>
        </button>
        <button class="category__btn">
          <span class="category__btn__title">全部</span
          ><span class="category__btn__num">(372)</span>
        </button>
        <button class="category__btn">
          <span class="category__btn__title">CSS</span
          ><span class="category__btn__num">(372)</span>
        </button>
        <button class="category__btn">
          <span class="category__btn__title">Webpack</span
          ><span class="category__btn__num">(372)</span>
        </button>
        <button class="category__btn">
          <span class="category__btn__title">NPM</span
          ><span class="category__btn__num">(372)</span>
        </button>
        <button class="category__btn">
          <span class="category__btn__title">Node.js</span
          ><span class="category__btn__num">(372)</span>
        </button>
        <button class="category__btn">
          <span class="category__btn__title">Vue</span
          ><span class="category__btn__num">(372)</span>
        </button>
      </div>
      <!-- <select name="" id="">
        <option value="">全部</option>
        <option value="">CSS</option>
        <option value="">Webpack</option>
        <option value="">NPM</option>
        <option value="">Node.js</option>
      </select> -->
    </div>
    <div class="page__section">
      <div class="table-responsive">
        <table class="table table-striped table-bordered table-hover table-sm">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">分類</th>
              <th scope="col">標題</th>
              <th scope="col">上傳時間</th>
              <th scope="col">上傳者</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">01</td>
              <td>CSS</td>
              <td>CSS變數</td>
              <td>2020-12-08 11:00</td>
              <td>由Eason分享</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Links"
};
</script>

<style scoped lang="scss">
h2 {
  font-size: 30px;
}
.category {
  &__group {
    margin: 5px -2.5px;
  }
  &__btn {
    background: var(--COLOR-GRAY-L45);
    border: 1px solid var(--COLOR-GRAY-L30);
    color: var(--COLOR-GRAY);
    border-radius: 50vh;
    margin: 2.5px;
    padding: 2px 10px;
    font-size: 13px;
    &__title {
    }
    &__num {
      color: var(--COLOR-GRAY-L25);
      font-size: 12px;
      margin-left: 5px;
    }
    &--active {
      background: var(--COLOR-MAIN-L10);
      color: var(--COLOR-WHITE);
      border: 1px solid var(--COLOR-MAIN);
      .category__btn__num {
        color: var(--COLOR-WHITE);
      }
    }
  }
}
.table {
  font-size: 12px;
}
</style>

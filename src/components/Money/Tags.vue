<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>穿</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Tags",
};
</script>

<style lang="scss" scoped >
.tags {
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      border-radius: $h/2;
    }
  }
  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      padding: 0 4px;
      color: #999;
    }
  }
}
</style>
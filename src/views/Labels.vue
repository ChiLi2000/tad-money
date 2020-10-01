<template>
  <Layout>
    <ol class="tags">
      <li>
        <span>从前</span>
        <Icon name="right" />
      </li>
      <li>
        <span>面包</span>
        <Icon name="right" />
      </li>
    </ol>
    <div class="button-wrapper">
      <Button @click="createTag"> 新建标签 </Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";
@Component({
  components: { Button },
})
export default class Labels extends Vue {}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  padding-left: 16px;
  li {
    min-height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;

    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 28px;
}
</style>
<template>
  <Layout class="backc">
    <div class="navBar">
      <Icon class="leftIcon" name="left"></Icon>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem field-name="标签名" placeholder="请输入标签名" />
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import FormItem from "@/components/Money/FormItem.vue";
@Component({
  components: { Button, FormItem },
})
export default class EditLabel extends Vue {}
</script>

<style lang='scss' scoped>
.backc {
  background: #f5f5f5;
}
.navBar {
  background: white;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .leftIcon {
    width: 24px;
    height: 24px;
  }
  .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.form-wrapper {
  background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 28px;
}
</style>
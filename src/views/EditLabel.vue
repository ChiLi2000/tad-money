<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left"></Icon>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="from-wrapper">
      <label class="notes">
        <span class="name">标签名</span>
        <input type="text" v-model="value" placeholder="请输入标签名" />
      </label>
    </div>
    <div class="button-wrapper">
      <button>删除标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

export default class EditLabel extends Vue {}
</script>

<style lang='scss' scoped>
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
.notes {
  font-size: 14px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background: white;
  margin-top: 8px;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    background: transparent;
    border: none;
    flex-grow: 1;
  }
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
  button {
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 28px;
    }
  }
}
</style>
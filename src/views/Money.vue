<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Tabs :data-source="recordTypeList" :value.sync="record.type" />
    <div class="notes">
      <FormItem
        field-name="备注"
        placeholder="请输入备注"
        :value.sync="record.notes"
      />
    </div>
    <Tags />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Tags from "@/components/Money/Tags.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tabs from "@/components/Tabs.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import { Component } from "vue-property-decorator";
import recordTypeList from "@/constants/recordTypeList";

@Component({
  components: { Tags, FormItem, Tabs, NumberPad },
})
export default class Money extends Vue {
  recordTypeList = recordTypeList;
  get recordList() {
    return this.$store.state.recordList;
  }
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
    createdAt: new Date(),
  };

  created() {
    this.$store.commit("fetchRecords");
  }

  saveRecord() {
    this.$store.commit("createRecord", this.record);
  }
}
</script>

<style lang="scss" >
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
  background: #f5f5f5;
}
</style>
